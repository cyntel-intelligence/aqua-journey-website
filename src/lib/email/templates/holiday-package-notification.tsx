import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from '@react-email/components';
import * as React from 'react';

interface HolidayPackageNotificationEmailProps {
  packageName: string;
  amount: number;
  buyerName: string;
  buyerEmail: string;
  buyerPhone?: string;
  swimmerName?: string;
  isGift?: string;
}

export default function HolidayPackageNotificationEmail({
  packageName,
  amount,
  buyerName,
  buyerEmail,
  buyerPhone,
  swimmerName,
  isGift,
}: HolidayPackageNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Holiday Package Purchase - {packageName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>New Holiday Package Purchase</Heading>
            <Text style={subtitle}>ACTION REQUIRED - CONTACT BUYER</Text>
          </Section>

          <Section style={content}>
            <Section style={detailsBox}>
              <Heading as="h3" style={h3}>Order Details</Heading>

              <Text style={detailItem}>
                <strong>Package:</strong> {packageName}
              </Text>
              <Text style={detailItem}>
                <strong>Amount Paid:</strong> ${amount.toFixed(2)}
              </Text>

              <Hr style={hrSmall} />

              <Text style={sectionLabel}>BUYER INFORMATION</Text>
              <Text style={detailItem}>
                <strong>Name:</strong> {buyerName}
              </Text>
              <Text style={detailItem}>
                <strong>Email:</strong> {buyerEmail}
              </Text>
              {buyerPhone && (
                <Text style={detailItem}>
                  <strong>Phone:</strong> {buyerPhone}
                </Text>
              )}

              <Hr style={hrSmall} />

              <Text style={sectionLabel}>SWIMMER</Text>
              <Text style={detailItem}>
                <strong>Swimmer&apos;s Name:</strong> {swimmerName || 'Not provided'}
              </Text>
              <Text style={detailItem}>
                <strong>Gift:</strong> {isGift === 'yes' ? 'Yes' : isGift === 'no' ? 'No' : 'Not specified'}
              </Text>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This is an automated notification from the Aqua Journey website.
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
  padding: '30px 40px',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 5px',
};

const subtitle = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '14px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  margin: '0',
};

const content = {
  padding: '30px 40px',
};

const detailsBox = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '25px',
};

const h3 = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const sectionLabel = {
  color: '#64748b',
  fontSize: '11px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  margin: '0 0 10px',
};

const detailItem = {
  color: '#1a1a1a',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 8px',
};

const hrSmall = {
  borderColor: '#e5e7eb',
  margin: '15px 0',
};

const footer = {
  backgroundColor: '#f8fafc',
  padding: '15px 40px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#94a3b8',
  fontSize: '12px',
  margin: '0',
};
