import React from "react";

import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log(token);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Xrc4Gsi1GHEAVv9vuKohSq0s00kVsrvLkH";
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing World Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      currency="USD"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
