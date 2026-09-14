import { NextRequest, NextResponse } from 'next/server';
import { stripe, type GiftCardPurchaseData } from '@/lib/stripe';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aquajourneyswimschool.com';

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      console.error('Stripe is not configured - missing STRIPE_SECRET_KEY');
      return NextResponse.json(
        { error: 'Payment system is not configured' },
        { status: 500 }
      );
    }

    const data: GiftCardPurchaseData = await request.json();

    // Validate required fields
    if (!data.amount || data.amount < 1) {
      return NextResponse.json(
        { error: 'Amount must be at least $1' },
        { status: 400 }
      );
    }

    if (!data.buyerName || !data.buyerEmail || !data.recipientName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (data.deliveryMethod === 'email' && !data.recipientEmail) {
      return NextResponse.json(
        { error: 'Recipient email is required for email delivery' },
        { status: 400 }
      );
    }

    if (data.deliveryMethod === 'mail' && !data.recipientAddress) {
      return NextResponse.json(
        { error: 'Recipient address is required for mail delivery' },
        { status: 400 }
      );
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Aqua Journey Gift Card',
              description: `Gift card for ${data.recipientName} - ${data.deliveryMethod} delivery`,
            },
            unit_amount: Math.round(data.amount * 100),
          },
          quantity: 1,
        },
      ],
      customer_email: data.buyerEmail,
      metadata: {
        type: 'gift_card',
        buyerName: data.buyerName,
        buyerEmail: data.buyerEmail,
        recipientName: data.recipientName,
        recipientEmail: data.recipientEmail || '',
        deliveryMethod: data.deliveryMethod,
        recipientAddress: data.recipientAddress
          ? JSON.stringify(data.recipientAddress)
          : '',
        personalMessage: data.personalMessage || '',
      },
      success_url: `${SITE_URL}/gift-cards/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/gift-cards/cancel`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to create checkout session: ${errorMessage}` },
      { status: 500 }
    );
  }
}
