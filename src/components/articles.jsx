import {useState, useEffect} from 'react';
import ArticleCard from './article-card';
import {getArticles} from '../utils/api';
import '../test.css';

function Articles() {
    const [articlesArray, setArticlesArray] = useState([]);

    useEffect(() => {
        getArticles().then((articlesFromApi) => {
            setArticlesArray(articlesFromApi);
        });
    }, []);

    
    return (        
        <div className='a'>                    
            <section className='scroll'>           
                {articlesArray.map((article) => {
                    return (
                        <div key={`${article.article_id}`}>                           
                            <ArticleCard className='card' key={`${article.article_id}`} topic={article.topic} author={article.author} created_at={article.created_at}article_id={article.article_id} title={article.title} article_img_url={article.article_img_url} votes={article.votes} comment_count={article.comment_count}/>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}


export default Articles;