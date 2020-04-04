import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import HomePage from './pages/homepage/';
import ShopPage from './pages/shop/';
import Header from './components/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/';
import { setCurrentUser } from './redux/user/user.actions';
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
            <Header />{' '}
            <Switch>
               <Route exact path="/" component={HomePage} />{' '}
               <Route path="/shop" component={ShopPage} />{' '}
               <Route path="/signin" component={SignInAndSignUp} />{' '}
            </Switch>{' '}
         </div>
      );
   }
}
const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
