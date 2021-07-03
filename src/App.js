import React from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
    
   
     {/* Header */}
     <Header />
     {/* App body */}
      <div className="app__body">
        <Sidebar/>
        {/* feed  */}
        {/* widgets */}
      </div>
   

    </div>
  );
}

export default App;
