import '../test.css';
import { Link } from 'react-router-dom'

const ArticleCard = (article) => {
    const postedAt =  new Date(article.created_at).toUTCString();
    const topic = `${article.topic.slice(0,1).toUpperCase()}${article.topic.slice(1, article.topic.length)}`
        
    return (
        <div>
            <Link to={`/articles/topics/${topic}`}>
                <div className='topicandposter'>
                    <p className='topicandposterelements'id="topic">{topic}</p>               
                </div>
            </Link>                       
            <h1 className='articletitle'>{article.title}</h1>
            <div className="bodyandimage">                
                <img className='articlesthumbnail'src={article.article_img_url} alt='article'></img>
            </div>
            <div className="votesandcommentcount">
                <p className='votecommentelement'>Votes:  {article.votes}</p>
                <p className='votecommentelement'>Comments: {article.comment_count}</p>
                <p className='vtopicandposterelements'>posted by: {article.author} at {postedAt}</p>
            </div>           
        </div>
    )
}

export default ArticleCard;