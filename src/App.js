import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// My Components
import { auth, createUserProfileDocument } from './firebase/';
import HomePage from './pages/homepage/';
import ShopPage from './pages/shop/';
import Header from './components/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import { setCurrentUser } from './redux/user/user.actions';
import CheckoutPage from './pages/checkout';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
   unsubscribeFromAuth = null;

   componentDidMount() {
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot((snapShot) => {
               setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data(),
               });
            });
         }
         setCurrentUser(userAuth);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path="/" component={HomePage} />{' '}
               <Route path="/shop" component={ShopPage} />{' '}
               <Route exact path="/checkout" component={CheckoutPage} />{' '}
               <Route
                  exact
                  path="/signin"
                  render={() =>
                     this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                  }
               />{' '}
            </Switch>{' '}
         </div>
      );
   }
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
