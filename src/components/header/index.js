import React from 'react';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/';
import { connect } from 'react-redux';

//My Components
import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './styles.js';

const Header = ({ currentUser, hidden }) => (
   <HeaderContainer>
      <LogoContainer className="logo-container" to="/">
         <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
         <OptionLink className="option" to="/shop">
            SHOP
         </OptionLink>
         <OptionLink className="option" to="/shop">
            CONTACT{' '}
         </OptionLink>
         {currentUser ? (
            <OptionLink as="div" className="option" onClick={() => auth.signOut()}>
               SIGN OUT
            </OptionLink>
         ) : (
            <OptionLink className="option" to="/signin">
               SIGN IN
            </OptionLink>
         )}
         <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
   </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
