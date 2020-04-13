import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/';
import { connect } from 'react-redux';

//My Components
import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './style.scss';
const Header = ({ currentUser, hidden }) => (
   <div className="header">
      <Link className="logo-container" to="/">
         <Logo className="logo" />
      </Link>{' '}
      <div className="options">
         <Link className="option" to="/shop">
            SHOP{' '}
         </Link>{' '}
         <Link className="option" to="/shop">
            CONTACT{' '}
         </Link>{' '}
         {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
               SIGN OUT{' '}
            </div>
         ) : (
            <Link className="option" to="/signin">
               SIGN IN{' '}
            </Link>
         )}{' '}
         <CartIcon />
      </div>{' '}
      {hidden ? null : <CartDropdown />}{' '}
   </div>
);
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
