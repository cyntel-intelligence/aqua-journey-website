import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { HOLIDAY_PACKAGES, getHolidayPackage } from '@/lib/constants';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aquajourneyswimschool.com';

export async function POST(request: NextRequest) {
  try {
    if (!HOLIDAY_PACKAGES.enabled) {
      return NextResponse.json(
        { error: 'Holiday packages are no longer available' },
        { status: 410 }
      );
    }

    // Check if Stripe is configured
    if (!stripe) {
      console.error('Stripe is not configured - missing STRIPE_SECRET_KEY');
      return NextResponse.json(
        { error: 'Payment system is not configured' },
        { status: 500 }
      );
    }

    const { packageId } = await request.json();
    const pkg = getHolidayPackage(packageId);

    if (!pkg) {
      return NextResponse.json({ error: 'Unknown package' }, { status: 400 });
    }

    // Price comes from server-side config, never from the client
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Aqua Journey ${pkg.name}`,
              description: pkg.includes.join(' • '),
            },
            unit_amount: pkg.price * 100,
          },
          quantity: 1,
        },
      ],
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: 'swimmer_name',
          label: { type: 'custom', custom: "Swimmer's name" },
          type: 'text',
          optional: true,
        },
        {
          key: 'is_gift',
          label: { type: 'custom', custom: 'Is this a gift?' },
          type: 'dropdown',
          dropdown: {
            options: [
              { label: "Yes, it's a gift", value: 'yes' },
              { label: 'No, for my family', value: 'no' },
            ],
          },
          optional: true,
        },
      ],
      metadata: {
        type: 'holiday_package',
        packageId: pkg.id,
      },
      success_url: `${SITE_URL}/holiday-packages/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/holiday-packages`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating holiday package checkout session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to create checkout session: ${errorMessage}` },
      { status: 500 }
    );
  }
}
