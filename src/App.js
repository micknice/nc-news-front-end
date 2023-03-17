import Header from './components/header.jsx';
import Articles from './components/articles.jsx';
import Article from './components/article.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header className='Header'/>          
      <Routes>     
        <Route exact path='/' element= {<Articles />}/> 
        <Route exact path='/articles' element= {<Articles />}/> 
        <Route exact path='/articles/topics/:topic' element= {<Articles />}/> 
        <Route path='/articles/:article_id' element= {<Article />}/>
      </Routes>
    </div>
  );
}

export default App;
