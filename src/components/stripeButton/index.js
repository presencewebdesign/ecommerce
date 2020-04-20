import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_lgM8XRZqQyeVIDTUKmVSoF6700Qf4rp6ya';
   const onToken = (token) => {
      console.log(token);
      alert('Payment Successfull');
   };
   return (
      <StripeCheckout
         label="Pay Now"
         name="Presence Clothing"
         billingAddress
         shippingAddress
         image="https://presence.agency/wp-content/themes/presence/img/icons/apple-icon-57x57.png"
         descriptiom={`Tour total is £${price}`}
         amount={priceForStripe}
         panelLabel="Pay now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default stripeCheckoutButton;
