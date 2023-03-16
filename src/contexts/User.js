import { createContext } from "react";
import { useState } from "react";


const UserContext = createContext();

const UserProvider = ({children}) => {
    //state is username
    const [user, setUser] = useState('happyamy2016');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


export {UserContext, UserProvider};