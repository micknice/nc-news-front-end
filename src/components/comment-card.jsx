// import {useState, useEffect} from 'react';
import '../test.css';



function CommentCard({comment}) {
    console.log(comment)
    return (
        <div>
            <div className='topicandposter'>                       
                    
                <p className='vtopicandposterelements'>posted by: {comment.author} at {comment.created_at}</p>
            </div>
            
            <div className="bodyandimage">
                <p className='body'>{comment.body}</p>
            </div>
                
            <div className="votesandcommentcount">
                <p className='votecommentelement'>Votes: {comment.votes}</p>
                
            </div>
            
        </div>
        
        

    )
}


export default CommentCard;