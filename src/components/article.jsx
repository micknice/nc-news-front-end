import {useParams} from 'react-router-dom';

import { getArticleByArticleId, getCommentsByArticleId, patchVotesByArticleId, postCommentByArticleId} from '../utils/api';
import CommentCard from './comment-card';
import '../test.css';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/User";
import LeaveComment from './leave-comment'




function Article() {
    const { article_id } = useParams();
    const [article, setArticle] = useState('');
    const [postedAt, setPostedAt] = useState('');
    const [loading, setLoading] = useState(true); 
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true); 
    const [votes, setVotes] = useState(0);
    const [voted, setVoted] = useState(false);
    
    
    
    
    
    useEffect(() => {         
        getArticleByArticleId(article_id).then((articleFromApi) => {
            setArticle(articleFromApi)                               
        }).then(() => {
            setLoading(false)
            setPostedAt(article.created_at.slice(0, article.created_at.length -5).replace('T', '  '))
        }).then(() => {getCommentsByArticleId(article_id).then((comments) => {
            setComments(comments)
        })}).then(() => {setLoadingComments(false)})    
    }, [article_id, article.created_at])

    const handleUpVote = (event) => {
        event.preventDefault();

        if (voted === false) {
            setVoted(true)
            setVotes((currentVotes) => currentVotes +1)
            patchVotesByArticleId(article_id)
        }       
    }

    
    
    if (loading) {
        return (    
            <p>Page loading...</p>            
        )
    } else if (loadingComments){
        return (               
                <p>Loading comments...</p>    
        )
    } else {       
        return (
            <div>                
                <section>
                <div className='topicandposter'>                       
                        <p className='topicandposterelements'id="topic">{article.topic}</p>
                        <p className='vtopicandposterelements'>posted by: {article.author} at {postedAt}</p>
                </div>
                <h1 className='articletitle'>{article.title}</h1>
                <div className="bodyandimage">
                    <img className='bodyandimage'src={article.article_img_url} alt='article'></img>
                    <p className='body'>{article.body}</p>
                </div>
                <div className="votesandcommentcount">
                    <button onClick={handleUpVote}>Nice!</button>
                    <p className='votecommentelement'>Votes:  {article.votes + votes}</p>
                    <p className='votecommentelement'>Comments: {article.comment_count}</p>
                </div>
                <div className='bodyandimage'>
                <section className='scroll'>
                    <LeaveComment></LeaveComment> 
                    <p>{article.comment_count === 0 ? 'No comments yet': `${article.comment_count} comments`}</p>                     
                    {comments.map((comment) => {   
                                            
                        return (                       
                            <div className='comment'key={`${comment.comment_id}`}>                       
                                <CommentCard className='card' key={`${comment.comment_id}`}  comment={comment}/>   
                            </div>                       
                        )
                    })}
                </section>

                </div>
                </section>
            </div>
        )
    }
    
    
    

    
}

export default Article;