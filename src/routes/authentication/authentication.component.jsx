import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    /*    useEffect(() => {
            async function logar() {
                const response = await getRedirectResult(auth);
                if (response) {
                    const userDocRef = await createUserDocumentFromAuth(response.user);
                }
            }
        }, []);*/

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            {/*<button onClick={logGoogleUser}>Logar com Google</button>*/}
            <SignInForm/>
            {/* <button onClick={signInWithGoogleRedirect}>Logar com Google Redirect</button>*/}
            <SignUpForm/>
        </div>
    );
}

export default Authentication;