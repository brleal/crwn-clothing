import {createContext, useState, useEffect} from 'react';

import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';

//o valor atual que vc quer acessar
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currenUser, setCurrentUser] = useState(null);
    const value = {currenUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

