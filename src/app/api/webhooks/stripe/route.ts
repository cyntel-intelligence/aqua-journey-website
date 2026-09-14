import { NextRequest, NextResponse } from 'next/server';
import { stripe, generateGiftCardCode, type DeliveryMethod } from '@/lib/stripe';
import { resend, EMAIL_FROM, BUSINESS_EMAIL } from '@/lib/email/resend';
import GiftCardReceiptEmail from '@/lib/email/templates/gift-card-receipt';
import GiftCardDeliveryEmail from '@/lib/email/templates/gift-card-delivery';
import GiftCardNotificationEmail from '@/lib/email/templates/gift-card-notification';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
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
      // 1. Send receipt to buyer
      await resend.emails.send({
        from: EMAIL_FROM,
        to: buyerEmail,
        subject: 'Your Aqua Journey Gift Card Purchase Confirmation',
        react: GiftCardReceiptEmail({
          buyerName,
          recipientName,
          amount,
          deliveryMethod: deliveryMethod as DeliveryMethod,
          giftCardCode: deliveryMethod === 'email' ? giftCardCode : undefined,
          personalMessage: personalMessage || undefined,
        }),
      });

      // 2. Send gift card to recipient (email delivery only)
      if (deliveryMethod === 'email' && recipientEmail) {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: recipientEmail,
          subject: `${buyerName} sent you an Aqua Journey Gift Card!`,
          react: GiftCardDeliveryEmail({
            recipientName,
            buyerName,
            amount,
            giftCardCode,
            personalMessage: personalMessage || undefined,
          }),
        });
      }

      // 3. Send notification to business
      await resend.emails.send({
        from: EMAIL_FROM,
        to: BUSINESS_EMAIL,
        subject: `New Gift Card Purchase - ${deliveryMethod.toUpperCase()}`,
        react: GiftCardNotificationEmail({
          buyerName,
          buyerEmail,
          recipientName,
          recipientEmail: recipientEmail || undefined,
          recipientAddress: parsedAddress,
          amount,
          deliveryMethod: deliveryMethod as DeliveryMethod,
          giftCardCode,
          personalMessage: personalMessage || undefined,
        }),
      });

      console.log(`Gift card ${giftCardCode} processed successfully`);
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Don't return error - payment was successful, email issue shouldn't fail the webhook
    }
  }

  return NextResponse.json({ received: true });
}
