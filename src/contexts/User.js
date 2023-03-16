import { createContext } from "react";
import { useState, useEffect } from "react";
import {getUsers} from '../utils/api';


const UserContext = createContext();

const UserProvider = ({children}) => {
    

    //state is username
    const [user, setUser] = useState('jessjelly');
    const [logInStatus, setLogInStatus] = useState(true);
    const [userArray, setUserArray] = useState([]);

    console.log('context', user)
    

    return (
        <UserContext.Provider value={{ user, setUser, logInStatus, setLogInStatus, userArray, setUserArray }}>
            {children}
        </UserContext.Provider>
    );
};


export {UserContext, UserProvider};