import React from 'react';
import './App.css';
import AppContainer from './container/todoApp';
import Loading from './components/backdrop';

function App() {
  return (
    <div className="App">
       <Loading/>
     <AppContainer/>
   
    </div>
  );
}

export default App;
