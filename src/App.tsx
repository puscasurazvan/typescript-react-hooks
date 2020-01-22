import React from 'react';
import './App.css';
import Header from './components/Header'
import Button from './components/Button'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title='Hello' />
      <Button onClick={(value) => {
        console.log(value)
      }} />
    </div>
  );
}

export default App;
