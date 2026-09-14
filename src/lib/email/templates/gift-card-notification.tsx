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

interface GiftCardNotificationEmailProps {
  buyerName: string;
  buyerEmail: string;
  recipientName: string;
  recipientEmail?: string;
  recipientAddress?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  amount: number;
  deliveryMethod: 'email' | 'mail' | 'pickup';
  giftCardCode: string;
  personalMessage?: string;
}

export default function GiftCardNotificationEmail({
  buyerName,
  buyerEmail,
  recipientName,
  recipientEmail,
  recipientAddress,
  amount,
  deliveryMethod,
  giftCardCode,
  personalMessage,
}: GiftCardNotificationEmailProps) {
  const actionRequired = deliveryMethod !== 'email';

  return (
    <Html>
      <Head />
      <Preview>New Gift Card Purchase - {deliveryMethod.toUpperCase()}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={actionRequired ? headerAction : header}>
            <Heading style={h1}>
              New Gift Card Purchase
            </Heading>
            <Text style={subtitle}>
              {deliveryMethod.toUpperCase()} DELIVERY
              {actionRequired && ' - ACTION REQUIRED'}
            </Text>
          </Section>

          <Section style={content}>
            {actionRequired && (
              <Section style={actionBox}>
                <Heading as="h2" style={actionTitle}>
                  {deliveryMethod === 'mail' ? '📦 Mail Physical Card' : '📍 Prepare for Pickup'}
                </Heading>
                <Text style={actionText}>
                  {deliveryMethod === 'mail'
                    ? 'Please prepare and mail a physical gift card to the recipient address below.'
                    : 'Please prepare a physical gift card for customer pickup.'}
                </Text>
              </Section>
            )}

            <Section style={detailsBox}>
              <Heading as="h3" style={h3}>Order Details</Heading>

              <Text style={detailItem}>
                <strong>Gift Card Code:</strong> {giftCardCode}
              </Text>
              <Text style={detailItem}>
                <strong>Amount:</strong> ${amount.toFixed(2)}
              </Text>
              <Text style={detailItem}>
                <strong>Delivery Method:</strong> {deliveryMethod.charAt(0).toUpperCase() + deliveryMethod.slice(1)}
              </Text>

              <Hr style={hrSmall} />

              <Text style={sectionLabel}>BUYER INFORMATION</Text>
              <Text style={detailItem}>
                <strong>Name:</strong> {buyerName}
              </Text>
              <Text style={detailItem}>
                <strong>Email:</strong> {buyerEmail}
              </Text>

              <Hr style={hrSmall} />

              <Text style={sectionLabel}>RECIPIENT INFORMATION</Text>
              <Text style={detailItem}>
                <strong>Name:</strong> {recipientName}
              </Text>
              {recipientEmail && (
                <Text style={detailItem}>
                  <strong>Email:</strong> {recipientEmail}
                </Text>
              )}
              {recipientAddress && (
                <Text style={detailItem}>
                  <strong>Mailing Address:</strong>
                  <br />
                  {recipientAddress.street}
                  <br />
                  {recipientAddress.city}, {recipientAddress.state} {recipientAddress.zip}
                </Text>
              )}

              {personalMessage && (
                <>
                  <Hr style={hrSmall} />
                  <Text style={sectionLabel}>PERSONAL MESSAGE</Text>
                  <Text style={messageText}>&quot;{personalMessage}&quot;</Text>
                </>
              )}
            </Section>

            {deliveryMethod === 'email' && (
              <Section style={statusBox}>
                <Text style={statusText}>
                  ✅ Virtual gift card has been automatically sent to {recipientEmail}
                </Text>
              </Section>
            )}
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
  backgroundColor: '#03a9f4',
  padding: '30px 40px',
  textAlign: 'center' as const,
};

const headerAction = {
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

const actionBox = {
  backgroundColor: '#fef3c7',
  border: '2px solid #f79007',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '25px',
};

const actionTitle = {
  color: '#92400e',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 10px',
};

const actionText = {
  color: '#92400e',
  fontSize: '14px',
  margin: '0',
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

const messageText = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontStyle: 'italic' as const,
  margin: '0',
};

const statusBox = {
  backgroundColor: '#dcfce7',
  borderRadius: '8px',
  padding: '15px 20px',
  marginTop: '20px',
};

const statusText = {
  color: '#166534',
  fontSize: '14px',
  margin: '0',
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
