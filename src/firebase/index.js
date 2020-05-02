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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   console.log('snapShot', snapShot);

   if (!snapShot.exists) {
      const {
         displayName,
         email
      } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log('eror creating user');
      }
   }

   return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey);

   const batch = firestore.batch();
   objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
   });

   return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map((doc) => {
      const {
         title,
         items
      } = doc.data();

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
      };
   });

   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {});
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
