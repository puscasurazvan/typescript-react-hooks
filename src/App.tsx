import React from 'react';
import './App.css';
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title='Hello' isActive={true} />
    </div>
  );
}

export default App;
