import React from 'react';
import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <HookMouse/> */}
     {/* <HookCounterOne/> */}
     <MouseContainer/>
    </div>
  );
}

export default App;
