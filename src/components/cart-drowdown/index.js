import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../components/customButton';
import CartItem from '../cartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
   <div className="cart-dropdown">
      <div className="cart-items">
         {' '}
         {cartItems.length ? (
            cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
         ) : (
            <span className="empty-message"> Your cart is empty </span>
         )}{' '}
      </div>{' '}
      <CustomButton
         onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
         }}
      >
         {' '}
         GO TO CHECKOUT{' '}
      </CustomButton>{' '}
   </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
