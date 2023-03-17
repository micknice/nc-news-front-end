import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import {getUsers} from '../utils/api';

function Header() {
    const {user, setUser} = useContext(UserContext);
    const [userName, setUserName] = useState('jessjelly');
    const {userArray, setUserArray} = useContext(UserContext);
    const {logInStatus, setLogInStatus} = useContext(UserContext);
    
    const handleUserChange = (event) => {
        event.preventDefault();
        setUserName(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('this', userName)
        console.log('that', userArray)
        console.log('the other', user)
        getUsers().then((usersFromApi) => {
            const usernameArray = usersFromApi.map((user) => (user = user.username))
            setUserArray(usernameArray);                       
        })
        
        if (userArray.includes(userName)) {
            setLogInStatus(true)
            setUser(userName)            
        } else {
            setLogInStatus(false)
        }
              
    }

    if (logInStatus) {
        return (
            <div className='wrapper'>               
                    <div className="login">Logged in as user: {user}                                          
                        <button type='submit'>log out</button>                        
                    </div>
                    <div> </div>
                    <div>
                        <img className='headerimage'src="https://imageshack.com/i/poxFwcJTp" alt='nice news, be nice'></img>  
                    </div>                           
            </div>        
            )       
    } else {
        return (

            <div className='wrapper'>               
                    <div>username: 
                        <form onSubmit={handleSubmit} className='userform'>
                            <input className="user" name='user' required value={userName} onChange={handleUserChange}></input>                    
                            <button type='submit'>login</button>
                        </form>
                    </div>
                    <div> </div>
                    <div>
                        <img className='headerimage'src="https://imageshack.com/i/poxFwcJTp" alt='nice news, be nice'></img>  
                    </div>                           
            </div>        
            )
    }
}

export default Header;