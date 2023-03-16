import { useContext, useState,  } from "react";
import { UserContext } from "../contexts/User";
import {postCommentByArticleId} from '../utils/api'
import {useParams} from 'react-router-dom';


function LeaveComment() {
    const {article_id} = useParams();
    const {logInStatus, setLogInStatus} = useContext(UserContext);   
    const [newCommentInput, setNewCommentInput] = useState('be nice...');
    
    const handleComment = (event) => {
        event.preventDefault();
        if(newCommentInput !== '' && newCommentInput !== 'be nice...') {
            
            console.log('success', newCommentInput)
        } else {
            console.log('invalid comment')
        }
    }

    if (logInStatus) {
        return (
            <form onSubmit={handleComment}>
                <label className='votesandcommentcount'>Leave a comment</label>
                <textarea className='commentbox' type="text" required value={newCommentInput}  onChange={(event) => {setNewCommentInput(event.target.value)}}></textarea>
                <button type='submit' className='votesandcommentcount'>Post</button>
            </form>
        )
    } else {
        return (
            <p>Log in to leave a comment</p>
        )

    }
    


}

export default LeaveComment;