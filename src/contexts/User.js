import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {        
    const [user, setUser] = useState('jessjelly');
    const [logInStatus, setLogInStatus] = useState(true);
    const [userArray, setUserArray] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser, logInStatus, setLogInStatus, userArray, setUserArray }}>
            {children}
        </UserContext.Provider>
    );
};


export {UserContext, UserProvider};