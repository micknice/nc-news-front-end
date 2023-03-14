import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getArticleByArticleId} from '../utils/api';

import '../test.css';



function Article() {
    const { article_id } = useParams();
    // const topic = `${article.topic.slice(0,1).toUpperCase()}${article.topic.slice(1, article.topic.length)}`
    const [article, setArticle] = useState('');
    const [postedAt, setPostedAt] = useState('');
    const [loading, setLoading] = useState(true);   
    
    useEffect(() => {         
        getArticleByArticleId(article_id).then((articleFromApi) => {
            setArticle(articleFromApi)                       
        }).then(() => {
            setLoading(false)
            setPostedAt(article.created_at.slice(0, article.created_at.length -5).replace('T', '  '))
        })      
    }, [article_id, article.created_at])
    
    if (loading) {
        return (
            <p>Page loading..</p>
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
                    <p className='body'>{article.body}</p>
                    <img className='articlesthumbnail'src={article.article_img_url} alt='article'></img>
                </div>
                <div className="votesandcommentcount">
                    <p className='votecommentelement'>Votes:  {article.votes}</p>
                    <p className='votecommentelement'>Comments: {article.comment_count}</p>
                </div>
                </section>
            </div>
        )
    }
    
    
    

    
}

export default Article;