import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Erro ao criar o usuário', error.message);
        }

    }

    return userDocRef;
};