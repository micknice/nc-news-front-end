
import '../test.css';

const ArticleCard = (article) => {
    const postedAt = article.created_at.slice(0, article.created_at.length -5).replace('T', '  ')
    const topic = `${article.topic.slice(0,1).toUpperCase()}${article.topic.slice(1, article.topic.length)}`
    
    

    
    return (
        <div>
            <div className='topicandposter'>                       
                    <p className='topicandposterelements'id="topic">{topic}</p>
                    <p className='vtopicandposterelements'>posted by: {article.author} at {postedAt}</p>
            </div>
            <h1 className='articletitle'>{article.title}</h1>
            <div className="bodyandimage">
                
                <img className='articlesthumbnail'src={article.article_img_url} alt='article'></img>
            </div>
            <div className="votesandcommentcount">
                <p className='votecommentelement'>Votes:  {article.votes}</p>
                <p className='votecommentelement'>Comments: {article.comment_count}</p>
            </div>
        </div>

    )
}

export default ArticleCard;