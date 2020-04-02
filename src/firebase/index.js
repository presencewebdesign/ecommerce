import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCtgaWzMTtqnbbKQddtljQaHLkbko-kWnY',
  authDomain: 'ecommerce-65f8b.firebaseapp.com',
  databaseURL: 'https://ecommerce-65f8b.firebaseio.com',
  projectId: 'ecommerce-65f8b',
  storageBucket: 'ecommerce-65f8b.appspot.com',
  messagingSenderId: '879961457400',
  appId: '1:879961457400:web:6feae243de277ca548310d',
  measurementId: 'G-FXVZF1DGPD',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
