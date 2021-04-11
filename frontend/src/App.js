import React from 'react';
import './App.css';
import { PlantsTable } from './components/PlantsTable';

const App = () => {
  return (
    <div className="App">
      <h2>The Office Garden</h2>
      <div>
        <PlantsTable />
      </div>
    </div>
  );
}

export default App;