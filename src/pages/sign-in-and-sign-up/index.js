import React from 'react';
import './style.scss';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

const SignInAndSignUp = () => (
   <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
   </div>
);

export default SignInAndSignUp;
