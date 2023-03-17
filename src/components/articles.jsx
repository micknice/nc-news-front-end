import {useState, useEffect} from 'react';
import ArticleCard from './article-card';
import {getArticles,getArticlesByTopic} from '../utils/api';
import { Link, useParams } from 'react-router-dom'
import '../test.css';

function Articles() {
    const { topic } = useParams();
    const [articlesArray, setArticlesArray] = useState([]);
    

    useEffect(() => {
        if (!topic) {
        getArticles().then((articlesFromApi) => {
            setArticlesArray(articlesFromApi);
        });
    }}, []);
    
    useEffect(() => {
        if (topic) {
            console.log(topic)
        getArticlesByTopic(topic).then((articlesFromApi) => {
            setArticlesArray(articlesFromApi);
        });
    }}, []);

    
    return (        
        <div className='a'>                    
            <section className='scroll'>           
                {articlesArray.map((article) => {
                    return (
                        <div>
                        <Link to={`/articles/${article.article_id}`}>
                            <div className='card' key={`${article.article_id}`}>                       
                                <ArticleCard className='card' key={`${article.article_id}`} topic={article.topic} author={article.author} created_at={article.created_at}article_id={article.article_id} title={article.title} article_img_url={article.article_img_url} votes={article.votes} comment_count={article.comment_count}/>
                            </div>
                        </Link>

                        </div>
                    )
                })}
            </section>
        </div>
    );
}


export default Articles;