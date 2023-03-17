import '../test.css';

function CommentCard({comment}) {
    const date = new Date(comment.created_at).toUTCString();
    return (
        <div>
            <div className='topicandposter'>                                           
                <p className='vtopicandposterelements'>posted by: {comment.author} at {date}</p>
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