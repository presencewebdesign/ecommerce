import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/';
import ShopPage from './pages/shop/';
import Header from './components/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} /> <Route path="/shop" component={ShopPage} />{' '}
        <Route path="/signin" component={SignInAndSignUp} />{' '}
      </Switch>{' '}
    </div>
  );
}

export default App;
