import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { PlantsTable } from './components/PlantsTable';

const App = () => {
  return (
    <div className="App">
      <h2>Our Plants</h2>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <PlantsTable />
      </div>
    </div>
  );
}

export default App;
