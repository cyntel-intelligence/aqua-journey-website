import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
} from '@react-email/components';
import * as React from 'react';

interface HolidayPackageReceiptEmailProps {
  buyerName: string;
  packageName: string;
  includes: readonly string[];
  amount: number;
}

export default function HolidayPackageReceiptEmail({
  buyerName,
  packageName,
  includes,
  amount,
}: HolidayPackageReceiptEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your Aqua Journey {packageName} Purchase Confirmation</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Aqua Journey Swim School</Heading>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={h2}>
              Thank You for Your Purchase! 🎄
            </Heading>

            <Text style={text}>Hi {buyerName},</Text>

            <Text style={text}>
              Thank you for purchasing the {packageName}! You&apos;re giving the gift of
              confidence, safety, and a skill that lasts a lifetime.
            </Text>

            <Section style={orderBox}>
              <Heading as="h3" style={h3}>Order Summary</Heading>
              <Text style={detailItem}>
                <strong>Package:</strong> {packageName}
              </Text>
              <Text style={detailItem}>
                <strong>Amount Paid:</strong> ${amount.toFixed(2)}
              </Text>
              <Text style={detailItem}>
                <strong>Includes:</strong>
              </Text>
              {includes.map((item) => (
                <Text key={item} style={listItem}>• {item}</Text>
              ))}
            </Section>

            <Text style={text}>
              <strong>What happens next?</strong> Stop by the swim school to pick up your
              holiday goodies!
            </Text>

            <Text style={text}>
              Questions? Reply to info@aquajourneyswimschool.com or call (386) 676-9555.
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Aqua Journey Swim School • 721 S. Nova Rd., Ormond Beach, FL 32174
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
  padding: '30px 40px',
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '22px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const h3 = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 15px',
};

const text = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const orderBox = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '25px',
  margin: '20px 0',
};

const detailItem = {
  color: '#1a1a1a',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 8px',
};

const listItem = {
  color: '#64748b',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 4px 10px',
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
