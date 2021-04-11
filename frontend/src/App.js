import React from 'react';
import './App.css';
import { PlantsTable } from './components/PlantsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h2 className="wrapper">The Office Plants</h2>
      <div className="wrapper">
        <PlantsTable />
      </div>
    </div>
  );
}

export default App;