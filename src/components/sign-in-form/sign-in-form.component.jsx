import {useState} from 'react';
import FormInput from '../form-input/form-input-component';
import Button from '../button/button.component';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss'

import {UserContext} from '../../context/user.context';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();

        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Senha incorreta');
                    break;
                case 'auth/user-not-found':
                    alert('Usuário não associado a este email');
                    break;
                default:
                    console.log(error);
            }

        }

    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='sign-up-container'>
            <h2>Já tem conta?</h2>
            <span>Logue com seu email e senha</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='E-Mail'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                {/*estilo: aula 102, 7:40*/}
                <div className='buttons-container'>
                    <Button type='submit'>Logar</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Logar com Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;