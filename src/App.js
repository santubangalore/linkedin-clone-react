import React from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
    
   
     {/* Header */}
     <Header />
     {/* App body */}
      <div className="app__body">
        <Sidebar name="santu"/>
       <Feed />
        {/* widgets */}
      </div>
   

    </div>
  );
}

export default App;
