import { NextRequest, NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { stripe, generateGiftCardCode, type DeliveryMethod } from '@/lib/stripe';
import { resend, EMAIL_FROM, BUSINESS_EMAIL } from '@/lib/email/resend';
import GiftCardReceiptEmail from '@/lib/email/templates/gift-card-receipt';
import GiftCardDeliveryEmail from '@/lib/email/templates/gift-card-delivery';
import GiftCardNotificationEmail from '@/lib/email/templates/gift-card-notification';
import HolidayPackageReceiptEmail from '@/lib/email/templates/holiday-package-receipt';
import HolidayPackageNotificationEmail from '@/lib/email/templates/holiday-package-notification';
import { getHolidayPackage } from '@/lib/constants';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  // Check if required services are configured
  if (!stripe) {
    console.error('Stripe is not configured - missing STRIPE_SECRET_KEY');
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  if (!resend) {
    console.error('Resend is not configured - missing RESEND_API_KEY');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    if (session.metadata?.type === 'holiday_package') {
      const pkg = getHolidayPackage(session.metadata.packageId);
      const packageName = pkg?.name ?? session.metadata.packageId;
      const amount = (session.amount_total || 0) / 100;
      const buyerEmail = session.customer_details?.email || session.customer_email || '';
      const buyerName = session.customer_details?.name || 'there';
      const customField = (key: string) => {
        const field = session.custom_fields?.find((f) => f.key === key);
        return field?.text?.value || field?.dropdown?.value || undefined;
      };

      try {
        console.log(`Sending holiday package emails for ${packageName} to ${buyerEmail}...`);

        // 1. Send receipt to buyer
        if (buyerEmail) {
          const receiptHtml = await render(HolidayPackageReceiptEmail({
            buyerName,
            packageName,
            includes: pkg?.includes ?? [],
            amount,
          }));

          const receiptResult = await resend.emails.send({
            from: EMAIL_FROM,
            to: buyerEmail,
            subject: `Your Aqua Journey ${packageName} Purchase Confirmation`,
            html: receiptHtml,
          });
          console.log('Holiday package receipt sent:', receiptResult);
        }

        // 2. Send notification to business
        const notificationHtml = await render(HolidayPackageNotificationEmail({
          packageName,
          amount,
          buyerName,
          buyerEmail,
          buyerPhone: session.customer_details?.phone || undefined,
          swimmerName: customField('swimmer_name'),
          isGift: customField('is_gift'),
        }));

        const notificationResult = await resend.emails.send({
          from: EMAIL_FROM,
          to: BUSINESS_EMAIL,
          subject: `New Holiday Package Purchase - ${packageName}`,
          html: notificationHtml,
        });
        console.log('Holiday package notification sent:', notificationResult);
      } catch (emailError) {
        console.error('Error sending holiday package emails:', emailError);
        // Don't return error - payment was successful, email issue shouldn't fail the webhook
      }

      return NextResponse.json({ received: true });
    }

    // Only process gift card purchases
    if (session.metadata?.type !== 'gift_card') {
      return NextResponse.json({ received: true });
    }

    const {
      buyerName,
      buyerEmail,
      recipientName,
      recipientEmail,
      deliveryMethod,
      recipientAddress,
      personalMessage,
    } = session.metadata;

    const amount = (session.amount_total || 0) / 100;
    const giftCardCode = generateGiftCardCode();
    const parsedAddress = recipientAddress ? JSON.parse(recipientAddress) : undefined;

    try {
      console.log('Sending gift card emails...');
      console.log(`Buyer: ${buyerEmail}, Recipient: ${recipientEmail}, Delivery: ${deliveryMethod}`);

      // Pre-render email templates to HTML
      const receiptHtml = await render(GiftCardReceiptEmail({
        buyerName,
        recipientName,
        amount,
        deliveryMethod: deliveryMethod as DeliveryMethod,
        giftCardCode: deliveryMethod === 'email' ? giftCardCode : undefined,
        personalMessage: personalMessage || undefined,
      }));

      // 1. Send receipt to buyer
      const receiptResult = await resend.emails.send({
        from: EMAIL_FROM,
        to: buyerEmail,
        subject: 'Your Aqua Journey Gift Card Purchase Confirmation',
        html: receiptHtml,
      });
      console.log('Receipt email sent:', receiptResult);

      // 2. Send gift card to recipient (email delivery only)
      if (deliveryMethod === 'email' && recipientEmail) {
        const deliveryHtml = await render(GiftCardDeliveryEmail({
          recipientName,
          buyerName,
          amount,
          giftCardCode,
          personalMessage: personalMessage || undefined,
        }));

        const deliveryResult = await resend.emails.send({
          from: EMAIL_FROM,
          to: recipientEmail,
          subject: `${buyerName} sent you an Aqua Journey Gift Card!`,
          html: deliveryHtml,
        });
        console.log('Delivery email sent:', deliveryResult);
      }

      // 3. Send notification to business
      const notificationHtml = await render(GiftCardNotificationEmail({
        buyerName,
        buyerEmail,
        recipientName,
        recipientEmail: recipientEmail || undefined,
        recipientAddress: parsedAddress,
        amount,
        deliveryMethod: deliveryMethod as DeliveryMethod,
        giftCardCode,
        personalMessage: personalMessage || undefined,
      }));

      const notificationResult = await resend.emails.send({
        from: EMAIL_FROM,
        to: BUSINESS_EMAIL,
        subject: `New Gift Card Purchase - ${deliveryMethod.toUpperCase()}`,
        html: notificationHtml,
      });
      console.log('Notification email sent:', notificationResult);

      console.log(`Gift card ${giftCardCode} processed successfully`);
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Don't return error - payment was successful, email issue shouldn't fail the webhook
    }
  }

  return NextResponse.json({ received: true });
}
