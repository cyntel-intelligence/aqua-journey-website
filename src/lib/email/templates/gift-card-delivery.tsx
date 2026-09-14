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

interface GiftCardDeliveryEmailProps {
  recipientName: string;
  buyerName: string;
  amount: number;
  giftCardCode: string;
  personalMessage?: string;
}

export default function GiftCardDeliveryEmail({
  recipientName,
  buyerName,
  amount,
  giftCardCode,
  personalMessage,
}: GiftCardDeliveryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{buyerName} sent you an Aqua Journey Gift Card!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={giftIcon}>🎁</Text>
            <Heading style={h1}>You&apos;ve Received a Gift!</Heading>
          </Section>

          <Section style={content}>
            <Text style={intro}>Hi {recipientName},</Text>

            <Text style={text}>
              <strong>{buyerName}</strong> has sent you an Aqua Journey Swim School gift card!
            </Text>

            {personalMessage && (
              <Section style={messageBox}>
                <Text style={messageLabel}>A message from {buyerName}:</Text>
                <Text style={messageText}>&quot;{personalMessage}&quot;</Text>
              </Section>
            )}

            <Section style={giftCardBox}>
              <Text style={giftCardLabel}>YOUR GIFT CARD</Text>
              <Text style={amountText}>${amount.toFixed(2)}</Text>
              <Text style={codeLabel}>Gift Card Code:</Text>
              <Text style={codeText}>{giftCardCode}</Text>
            </Section>

            <Hr style={hr} />

            <Heading as="h2" style={h2}>How to Redeem</Heading>

            <Text style={text}>
              Your gift card can be used for:
            </Text>

            <ul style={list}>
              <li style={listItem}>Swim lessons for children or adults</li>
              <li style={listItem}>Swimwear and accessories</li>
              <li style={listItem}>Any retail purchases at our facility</li>
            </ul>

            <Text style={text}>
              To redeem, simply present this code when enrolling or making a purchase at
              Aqua Journey Swim School. You can also mention this code when contacting us.
            </Text>

            <Section style={ctaBox}>
              <Link href="https://app.aquajourneyswimschool.com/enroll" style={ctaButton}>
                Enroll in Classes
              </Link>
            </Section>

            <Hr style={hr} />

            <Text style={contactText}>
              <strong>Visit Us:</strong>
              <br />
              721 S. Nova Rd., Ormond Beach, FL 32174
            </Text>

            <Text style={contactText}>
              <strong>Contact:</strong>
              <br />
              <Link href="tel:+13866769555" style={link}>(386) 676-9555</Link>
              <br />
              <Link href="mailto:info@aquajourneyswimschool.com" style={link}>
                info@aquajourneyswimschool.com
              </Link>
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Aqua Journey Swim School
              <br />
              <Link href="https://aquajourneyswimschool.com" style={footerLink}>
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
  backgroundColor: '#f79007',
  padding: '40px',
  textAlign: 'center' as const,
};

const giftIcon = {
  fontSize: '48px',
  margin: '0 0 10px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0',
};

const content = {
  padding: '40px',
};

const intro = {
  color: '#1a1a1a',
  fontSize: '18px',
  margin: '0 0 16px',
};

const text = {
  color: '#64748b',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const messageBox = {
  backgroundColor: '#fef3c7',
  borderLeft: '4px solid #f79007',
  borderRadius: '4px',
  padding: '16px 20px',
  margin: '20px 0',
};

const messageLabel = {
  color: '#92400e',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px',
};

const messageText = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontStyle: 'italic' as const,
  margin: '0',
};

const giftCardBox = {
  backgroundColor: '#03a9f4',
  borderRadius: '12px',
  padding: '30px',
  margin: '30px 0',
  textAlign: 'center' as const,
};

const giftCardLabel = {
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '12px',
  fontWeight: 'bold',
  letterSpacing: '2px',
  margin: '0 0 10px',
};

const amountText = {
  color: '#ffffff',
  fontSize: '48px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const codeLabel = {
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '12px',
  margin: '0 0 5px',
};

const codeText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'monospace',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  padding: '10px 20px',
  borderRadius: '6px',
  display: 'inline-block' as const,
};

const list = {
  color: '#64748b',
  fontSize: '16px',
  lineHeight: '28px',
  paddingLeft: '20px',
  margin: '0 0 16px',
};

const listItem = {
  margin: '0',
};

const ctaBox = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const ctaButton = {
  backgroundColor: '#f79007',
  borderRadius: '8px',
  color: '#ffffff',
  display: 'inline-block' as const,
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '14px 30px',
  textDecoration: 'none',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '30px 0',
};

const contactText = {
  color: '#64748b',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 16px',
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

const footerLink = {
  color: '#03a9f4',
  textDecoration: 'none',
};
