import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../components/customButton';
import CartItem from '../cartItem';
import './style.scss';

const CartDropdown = ({ cartItems }) => (
   <div className="cart-dropdown">
      <div className="cart-items">
         {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
         ))}
      </div>{' '}
      <CustomButton> GO TO CHECKOUT </CustomButton>{' '}
   </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
   cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
