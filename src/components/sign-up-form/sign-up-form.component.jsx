import {useState} from 'react';

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

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

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Senha não confere');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});

            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('E-mail já utilizado.');
            }
            console.log('Erro ao criar usuário.', error)
        }

    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <h1>Logue com seu email e senha</h1>
            <form onSubmit={handleSubmit}>
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