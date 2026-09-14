'use client';

import { useState, type FormEvent } from 'react';
import { GIFT_CARD_CONFIG } from '@/lib/constants';

type DeliveryMethod = 'email' | 'mail' | 'pickup';

interface FormData {
  amount: number;
  customAmount: string;
  deliveryMethod: DeliveryMethod;
  buyerName: string;
  buyerEmail: string;
  recipientName: string;
  recipientEmail: string;
  recipientStreet: string;
  recipientCity: string;
  recipientState: string;
  recipientZip: string;
  personalMessage: string;
}

export default function GiftCardPurchaseForm() {
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    amount: 50,
    customAmount: '',
    deliveryMethod: 'email',
    buyerName: '',
    buyerEmail: '',
    recipientName: '',
    recipientEmail: '',
    recipientStreet: '',
    recipientCity: '',
    recipientState: '',
    recipientZip: '',
    personalMessage: '',
  });

  const handleAmountSelect = (amount: number) => {
    setIsCustomAmount(false);
    setFormData((prev) => ({ ...prev, amount, customAmount: '' }));
  };

  const handleCustomAmountChange = (value: string) => {
    setIsCustomAmount(true);
    const numValue = parseInt(value, 10) || 0;
    setFormData((prev) => ({ ...prev, customAmount: value, amount: numValue }));
  };

  const handleDeliveryMethodChange = (method: DeliveryMethod) => {
    setFormData((prev) => ({ ...prev, deliveryMethod: method }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const amount = isCustomAmount ? parseInt(formData.customAmount, 10) : formData.amount;

    if (amount < GIFT_CARD_CONFIG.minAmount || amount > GIFT_CARD_CONFIG.maxAmount) {
      setError(`Amount must be between $${GIFT_CARD_CONFIG.minAmount} and $${GIFT_CARD_CONFIG.maxAmount}`);
      return false;
    }

    if (!formData.buyerName.trim() || !formData.buyerEmail.trim() || !formData.recipientName.trim()) {
      setError('Please fill in all required fields');
      return false;
    }

    if (formData.deliveryMethod === 'email' && !formData.recipientEmail.trim()) {
      setError('Recipient email is required for email delivery');
      return false;
    }

    if (formData.deliveryMethod === 'mail') {
      if (!formData.recipientStreet.trim() || !formData.recipientCity.trim() ||
          !formData.recipientState.trim() || !formData.recipientZip.trim()) {
        setError('Complete recipient address is required for mail delivery');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const amount = isCustomAmount ? parseInt(formData.customAmount, 10) : formData.amount;

      const payload = {
        amount,
        deliveryMethod: formData.deliveryMethod,
        buyerName: formData.buyerName.trim(),
        buyerEmail: formData.buyerEmail.trim(),
        recipientName: formData.recipientName.trim(),
        recipientEmail: formData.deliveryMethod === 'email' ? formData.recipientEmail.trim() : undefined,
        recipientAddress: formData.deliveryMethod === 'mail' ? {
          street: formData.recipientStreet.trim(),
          city: formData.recipientCity.trim(),
          state: formData.recipientState.trim(),
          zip: formData.recipientZip.trim(),
        } : undefined,
        personalMessage: formData.personalMessage.trim() || undefined,
      };

      const response = await fetch('/api/gift-cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentAmount = isCustomAmount ? parseInt(formData.customAmount, 10) || 0 : formData.amount;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Amount Selection */}
      <div>
        <label className="block text-lg font-semibold text-[var(--foreground)] mb-4">
          Select Amount
        </label>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {GIFT_CARD_CONFIG.presetAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountSelect(amount)}
              className={`py-3 px-4 rounded-lg font-semibold text-lg transition-all ${
                !isCustomAmount && formData.amount === amount
                  ? 'bg-[var(--primary)] text-white ring-2 ring-[var(--primary)] ring-offset-2'
                  : 'bg-white border-2 border-gray-200 text-[var(--foreground)] hover:border-[var(--primary)]'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gray)] text-lg">$</span>
          <input
            type="number"
            placeholder="Custom amount"
            value={formData.customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            min={1}
            className={`w-full pl-8 pr-4 py-3 rounded-lg border-2 text-lg transition-all ${
              isCustomAmount
                ? 'border-[var(--primary)] ring-2 ring-[var(--primary)] ring-offset-2'
                : 'border-gray-200 hover:border-[var(--primary)]'
            }`}
          />
        </div>
        <p className="text-sm text-[var(--gray)] mt-2">
          Enter any amount
        </p>
      </div>

      {/* Delivery Method */}
      <div>
        <label className="block text-lg font-semibold text-[var(--foreground)] mb-4">
          Delivery Method
        </label>
        <div className="space-y-3">
          {GIFT_CARD_CONFIG.deliveryMethods.map((method) => (
            <label
              key={method.id}
              className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                formData.deliveryMethod === method.id
                  ? 'border-[var(--primary)] bg-blue-50'
                  : 'border-gray-200 hover:border-[var(--primary)]'
              }`}
            >
              <input
                type="radio"
                name="deliveryMethod"
                value={method.id}
                checked={formData.deliveryMethod === method.id}
                onChange={() => handleDeliveryMethodChange(method.id as DeliveryMethod)}
                className="mt-1 w-5 h-5 text-[var(--primary)]"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {method.id === 'email' && (
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {method.id === 'mail' && (
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  )}
                  {method.id === 'pickup' && (
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  <span className="font-semibold text-[var(--foreground)]">{method.label}</span>
                </div>
                <p className="text-sm text-[var(--gray)] mt-1">{method.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Buyer Information */}
      <div>
        <label className="block text-lg font-semibold text-[var(--foreground)] mb-4">
          Your Information
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="buyerName" className="block text-sm font-medium text-[var(--gray)] mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="buyerName"
              name="buyerName"
              value={formData.buyerName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="buyerEmail" className="block text-sm font-medium text-[var(--gray)] mb-1">
              Your Email *
            </label>
            <input
              type="email"
              id="buyerEmail"
              name="buyerEmail"
              value={formData.buyerEmail}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Recipient Information */}
      <div>
        <label className="block text-lg font-semibold text-[var(--foreground)] mb-4">
          Recipient Information
        </label>
        <div className="space-y-4">
          <div>
            <label htmlFor="recipientName" className="block text-sm font-medium text-[var(--gray)] mb-1">
              Recipient Name *
            </label>
            <input
              type="text"
              id="recipientName"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
            />
          </div>

          {formData.deliveryMethod === 'email' && (
            <div>
              <label htmlFor="recipientEmail" className="block text-sm font-medium text-[var(--gray)] mb-1">
                Recipient Email *
              </label>
              <input
                type="email"
                id="recipientEmail"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
              />
            </div>
          )}

          {formData.deliveryMethod === 'mail' && (
            <>
              <div>
                <label htmlFor="recipientStreet" className="block text-sm font-medium text-[var(--gray)] mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="recipientStreet"
                  name="recipientStreet"
                  value={formData.recipientStreet}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
                />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="recipientCity" className="block text-sm font-medium text-[var(--gray)] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="recipientCity"
                    name="recipientCity"
                    value={formData.recipientCity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="recipientState" className="block text-sm font-medium text-[var(--gray)] mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    id="recipientState"
                    name="recipientState"
                    value={formData.recipientState}
                    onChange={handleInputChange}
                    required
                    maxLength={2}
                    placeholder="FL"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="recipientZip" className="block text-sm font-medium text-[var(--gray)] mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="recipientZip"
                    name="recipientZip"
                    value={formData.recipientZip}
                    onChange={handleInputChange}
                    required
                    maxLength={10}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Personal Message */}
      <div>
        <label htmlFor="personalMessage" className="block text-lg font-semibold text-[var(--foreground)] mb-4">
          Personal Message <span className="text-sm font-normal text-[var(--gray)]">(optional)</span>
        </label>
        <textarea
          id="personalMessage"
          name="personalMessage"
          value={formData.personalMessage}
          onChange={handleInputChange}
          rows={3}
          maxLength={500}
          placeholder="Add a personal message to the recipient..."
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none resize-none"
        />
        <p className="text-sm text-[var(--gray)] mt-1">
          {formData.personalMessage.length}/500 characters
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || currentAmount < GIFT_CARD_CONFIG.minAmount}
        className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            Continue to Payment - ${currentAmount > 0 ? currentAmount.toFixed(2) : '0.00'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-sm text-[var(--gray)]">
        Secure payment powered by Stripe
      </p>
    </form>
  );
}
