import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkoutItem';
import StripeCheckoutButton from '../../components/stripeButton';
import './style.scss';

const CheckoutPage = ({ cartItems, total }) => (
   <div className="checkout-page">
      <div className="checkout-header">
         <div className="header-blocks">
            <span> Product </span>{' '}
         </div>{' '}
         <div className="header-blocks">
            <span> Description </span>{' '}
         </div>{' '}
         <div className="header-blocks">
            <span> Quantity </span>{' '}
         </div>{' '}
         <div className="header-blocks">
            <span> Price </span>{' '}
         </div>{' '}
         <div className="header-blocks">
            <span> remove </span>{' '}
         </div>{' '}
      </div>{' '}
      {cartItems.map((cartItem) => (
         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}{' '}
      <div className="total">
         <span> TOTAL: $ {total} </span>{' '}
      </div>{' '}
      <div className="test-warning">
         *Please use the following test credit card for payments* <br />
         4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />{' '}
   </div>
);

const mapsStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal,
});

export default connect(mapsStateToProps)(CheckoutPage);
