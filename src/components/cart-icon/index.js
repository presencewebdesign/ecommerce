import React from 'react';
import { ReactComponent as ShopppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './style.scss';

const CartIcon = ({ toggleCartHidden }) => (
   <div className="cart-icon" onClick={toggleCartHidden}>
      <ShopppingIcon className="shopping-icon">
         <span className="icon-count"> 0 </span>{' '}
      </ShopppingIcon>{' '}
   </div>
);

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
