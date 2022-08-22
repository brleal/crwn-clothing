import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

//quando registra essa app no site do firebase, ele disponibiliza esses JS abaixo:
//
//https://console.firebase.google.com/project/crwn-clothing-db-35205/overview
//
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBwAbZqwREIZgxiazSpgKHPtNfFR49XAao',
    authDomain: 'crwn-clothing-db-35205.firebaseapp.com',
    projectId: 'crwn-clothing-db-35205',
    storageBucket: 'crwn-clothing-db-35205.appspot.com',
    messagingSenderId: '668160029753',
    appId: '1:668160029753:web:50ae304f3e60a69e5a49e8'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);