import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;
const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Newsletter service is not configured' },
        { status: 500 }
      );
    }

    // Add subscriber to MailerLite
    const response = await fetch(`${MAILERLITE_API_URL}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        status: 'active',
        groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : [],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle already subscribed case gracefully
      if (response.status === 409 || data.message?.includes('already')) {
        return NextResponse.json(
          { success: true, message: 'Already subscribed' },
          { status: 200 }
        );
      }

      console.error('MailerLite error:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
