import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import {postCommentByArticleId} from '../utils/api'
import {useParams} from 'react-router-dom';


function LeaveComment({comments, setComments}) {
    
    const {article_id} = useParams();
    const {logInStatus, setLogInStatus, user} = useContext(UserContext);   
    const [newCommentInput, setNewCommentInput] = useState('be nice...');
    const [posted, setPosted] = useState(false)
    
    const handleComment = (event) => {
        event.preventDefault();
        if(newCommentInput !== '' && newCommentInput !== 'be nice...' && newCommentInput !== 'Post Successful!' && newCommentInput !== 'Post unsuccessful. Try again...' && posted === false) {
            setPosted(true)
            postCommentByArticleId(article_id, user, newCommentInput).then((comment) => {                
                setComments([comment, ...comments])
                setNewCommentInput('Post Successful!')
                // .then(set)              
            })            
        } else { 
            setNewCommentInput('Post unsuccessful. Try again...')           
        }
    }

    if (logInStatus) {
        return (
            <form onSubmit={handleComment}>
                <label className='votesandcommentcount'>Leave a comment</label>
                <textarea className='commentbox' type="text" required value={newCommentInput}  onChange={(event) => {setNewCommentInput(event.target.value)}}></textarea>
                <button type='submit' className='votesandcommentcount' id="commentsubmit">Post</button>
            </form>
        )
    } else {
        return (
            <p className="login">Log in to leave a comment.</p>
        )

    }
    


}

export default LeaveComment;