import {useState} from 'react';

import {createAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        //createAuthUserWithEmailAndPassword
        //TODO desafio
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <h1>Logue com seu email e senha</h1>
            <form onSubmit={() => {
            }}>
                <label>Nome</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>

                <label>E-mail</label>
                <input type='email' required onChange={handleChange} name='email' value={email}/>

                <label>Senha</label>
                <input type='password' required onChange={handleChange} name='password' value={password}/>

                <label>Confirmação de senha</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

                <button type='submit'>OK</button>
            </form>
        </div>
    )
}

export default SignUpForm;