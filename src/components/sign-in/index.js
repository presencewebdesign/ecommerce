import React, { Component } from 'react';
import './style.scss';
import FormInput from '../formInput/';
import CustomButton from '../customButton';
import { auth, signInWithGoogle } from '../../firebase/';

export default class signIn extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
      };
   }

   handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({
            email: '',
            password: '',
         });
      } catch (error) {
         console.log('error', error);
      }
   };
   handleChange = (event) => {
      event.preventDefault();
      const { value, name } = event.target;
      this.setState({
         [name]: value,
      });
   };

   render() {
      const { email, password } = this.state;

      return (
         <div className="sign-in">
            <h2> I already have an account </h2> <span> Sign in with your email and password </span>
            <form onSubmit={this.handleSubmit}>
               <FormInput
                  handleChange={this.handleChange}
                  type="text"
                  name="email"
                  value={email}
                  label="email"
                  required
               />
               <FormInput
                  handleChange={this.handleChange}
                  type="password"
                  name="password"
                  value={password}
                  label="password"
                  required
               />
               <div className="buttons">
                  <CustomButton type="submit"> Sign in </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                     Sign in with Google
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}
