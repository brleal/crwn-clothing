import {createContext, useState} from 'react';

//o valor atual que vc quer acessar
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currenUser, setCurrentUser] = useState(null);
    const value = {currenUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

