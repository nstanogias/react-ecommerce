import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDkPncyicnZJtRYsWU6GlGG-gtrG4rkhbo',
  authDomain: 'react-ecommerce-80a3b.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-80a3b.firebaseio.com',
  projectId: 'react-ecommerce-80a3b',
  storageBucket: 'react-ecommerce-80a3b.appspot.com',
  messagingSenderId: '142684976378',
  appId: '1:142684976378:web:f2b8f1a56df64d8b594543'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
