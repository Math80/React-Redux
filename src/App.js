import React from 'react';
import counterReducer from './counterReducer';
import CounterContainer from './CounterContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>COUNTER</h1>
      <counterReducer />
      <CounterContainer />
    </div>
  );
}

export default App;
