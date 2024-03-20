import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from './PaymentComponent';

// Replace with your Stripe public key
const stripePromise = loadStripe('pk_test_51OvzlHBI5QUh06IFh10ejKcztjYKweJ5ubUlW4pYC0Rntn97BpfJBkqM3aXilIOcomGr9tmJxUWtO6cdBdPSj38w00zpERHfkI');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent />
    </Elements>
  );
}

export default App;
