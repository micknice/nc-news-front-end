import React from 'react';

import Articles from './components/articles.jsx';
import Header from './components/header.jsx';
import {Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">       
      <Routes>     
        <Route exact path='/' element= {<Articles />}/> 
      </Routes>
    </div>
  );
}

export default App;
