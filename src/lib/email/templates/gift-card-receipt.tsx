import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
  Preview,
} from '@react-email/components';
import * as React from 'react';

interface GiftCardReceiptEmailProps {
  buyerName: string;
  recipientName: string;
  amount: number;
  deliveryMethod: 'email' | 'mail' | 'pickup';
  giftCardCode?: string;
  personalMessage?: string;
}

export default function GiftCardReceiptEmail({
  buyerName,
  recipientName,
  amount,
  deliveryMethod,
  giftCardCode,
  personalMessage,
}: GiftCardReceiptEmailProps) {
  const deliveryText = {
    email: 'The gift card has been sent to the recipient via email.',
    mail: 'The physical gift card will be mailed within 5-7 business days.',
    pickup: 'The gift card is ready for pickup at our Ormond Beach location.',
  };

  return (
    <Html>
      <Head />
      <Preview>Your Aqua Journey Gift Card Purchase Confirmation</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Aqua Journey Swim School</Heading>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={h2}>
              Thank You for Your Purchase!
            </Heading>

            <Text style={text}>Hi {buyerName},</Text>

            <Text style={text}>
              Thank you for purchasing an Aqua Journey gift card! Your gift of swimming lessons
              is a meaningful present that helps keep children safe around water.
            </Text>

            <Section style={orderBox}>
              <Heading as="h3" style={h3}>Order Summary</Heading>
              <Text style={orderItem}>
                <strong>Amount:</strong> ${amount.toFixed(2)}
              </Text>
              <Text style={orderItem}>
                <strong>Recipient:</strong> {recipientName}
              </Text>
              <Text style={orderItem}>
                <strong>Delivery Method:</strong> {deliveryMethod.charAt(0).toUpperCase() + deliveryMethod.slice(1)}
              </Text>
              {giftCardCode && (
                <Text style={orderItem}>
                  <strong>Gift Card Code:</strong> {giftCardCode}
                </Text>
              )}
              {personalMessage && (
                <Text style={orderItem}>
                  <strong>Your Message:</strong> &quot;{personalMessage}&quot;
                </Text>
              )}
            </Section>

            <Text style={text}>{deliveryText[deliveryMethod]}</Text>

            <Hr style={hr} />

            <Text style={text}>
              <strong>Redemption:</strong> Gift cards can be applied toward swim lessons,
              swimwear, or any retail purchases at Aqua Journey Swim School.
            </Text>

            <Text style={text}>
              If you have any questions, please contact us at{' '}
              <Link href="mailto:info@aquajourneyswimschool.com" style={link}>
                info@aquajourneyswimschool.com
              </Link>{' '}
              or call{' '}
              <Link href="tel:+13866769555" style={link}>
                (386) 676-9555
              </Link>
              .
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Aqua Journey Swim School
              <br />
              721 S. Nova Rd., Ormond Beach, FL 32174
              <br />
              <Link href="https://aquajourneyswimschool.com" style={link}>
                aquajourneyswimschool.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#03a9f4',
  padding: '30px 40px',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const content = {
  padding: '40px',
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '22px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const h3 = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 15px',
};

const text = {
  color: '#64748b',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const orderBox = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px 0',
};

const orderItem = {
  color: '#1a1a1a',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 8px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '30px 0',
};

const link = {
  color: '#03a9f4',
  textDecoration: 'none',
};

const footer = {
  backgroundColor: '#f8fafc',
  padding: '20px 40px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#64748b',
  fontSize: '12px',
  lineHeight: '20px',
  margin: '0',
};
