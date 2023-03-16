import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/User";
import {getUsers} from '../utils/api';

function Header() {
    const {user, setUser} = useContext(UserContext);
    const {userName, setUserName} = useState(user);
    const {userArray, setUserArray} = useState([])
    

    useEffect(() => {
        getUsers().then((usersFromApi) => {
            setUserArray(usersFromApi);
            console.log(userArray)
        });
    }, [] )

    const handleUserChange = (event) => {
        event.preventDefault();
        setUserName(event.target.value)

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('username', userName)
        setUser(userName);        
    }




    
    return (

    <div className='wrapper'>
               
            <div>User:
                <form onSubmit={handleSubmit} className='userform'>
                    <select className="user" name='user' onChange={handleUserChange}>
                        {}
                    </select>
                    
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div>Search</div>
            <div>
            <img className='headerimage'src="https://imageshack.com/i/poxFwcJTp" alt='nice news, be nice'></img>  
            </div>
            
               
    </div>

    )

}

export default Header;