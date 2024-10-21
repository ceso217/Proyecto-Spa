// components/CheckoutButton.jsx
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

const CheckoutButton = () => {
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { id } = await response.json();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
    >
      Pagar y Reservar Turno
    </button>
  );
};

export default CheckoutButton;
