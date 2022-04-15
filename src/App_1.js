import React from 'react';
import './App.css';
import Average from './hooks/Average';
import Counter from './hooks/Counter';
import Info from './hooks/Info';

function App() {
  return (
    <>
      <div>Todo App 만들기</div>
      <Counter/>
      <Info/>
      <Average/>
    </>
  );
}

export default App;
