import { createContext } from "react";
import { useState, useEffect } from "react";
import {getUsers} from '../utils/api';


const UserContext = createContext();

const UserProvider = ({children}) => {
    

    //state is username
    const [user, setUser] = useState('');
    const [logInStatus, setLogInStatus] = useState(false);
    const [userArray, setUserArray] = useState([]);

    
    

    return (
        <UserContext.Provider value={{ user, setUser, logInStatus, setLogInStatus, userArray, setUserArray }}>
            {children}
        </UserContext.Provider>
    );
};


export {UserContext, UserProvider};