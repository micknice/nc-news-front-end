
import Articles from './components/articles.jsx';

import {Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">       
      <Routes>     
        <Route exact path='/' element= {<Articles />}/> 
        <Route exact path='/articles' element= {<Articles />}/> 
      </Routes>
    </div>
  );
}

export default App;
