
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './PaymentComponent.css'; // Make sure to create this CSS file

function PaymentComponent() {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js has not yet loaded.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, token} = await stripe.createToken(cardElement);

    if (error) {
      console.error('[error]', error);
      alert(`Payment Error: ${error.message}`);
    } else {
      console.log('[Token]', token);
      alert(`Payment Successful! Token: ${token.id}`);
    }
  };

  return (
    <form onSubmit={handlePayment} className="payment-form">
      <div className="card-info">
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay
      </button>
    </form>
  );
}

export default PaymentComponent;
