import React from 'react';
import './App.css';
import AppContainer from './container/todoApp';
import Loading from './components/backdrop';
import Notification from './components/alert';

function App() {
  return (
    <div className="App">
       <Loading/>
       <Notification/>
     <AppContainer/> 
   
    </div>
  );
}

export default App;
