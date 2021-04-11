import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { PlantsTable } from './components/PlantsTable';
import { useSelector, useDispatch } from 'react-redux';
import { DecrementAllPlants, UpdatePlant } from './services/plants';


const App = () => {

  // const plants = useSelector(state => state.plantsReducer.plants);
  const dispatch = useDispatch();

  const plant1 = useSelector(state => state.plantsReducer.plants[0]);
  // console.log(plant1);

  // const x = setInterval(() => {
  //   decrementPlants();
  // }, 10000)

  // const decrementPlants = () => {
  //   DecrementAllPlants(dispatch, plants);
  //   clearInterval(x);
  // }

  const decSelPlant = (p) => {
    const dropWateredPlant = { ...p, waterLevel: p.waterLevel - 1 };
    UpdatePlant(dispatch, dropWateredPlant);
  }

  // setInterval(() => {
  //   if (plant1) {
  //     decSelPlant(plant1);
  //   }
  // }, 5000)

  // var clearTimer = 0;
  // if (clearTimer == 0) {
  //   clearTimer = setInterval(function () {
  //     decSelPlant(plant1);
  //   }, 5000);
  // }


  return (
    <div className="App">
      <h2>Our Plants</h2>
      <div style={{ maxWidth: '80%', margin: 'auto' }}>
        <PlantsTable />
      </div>
    </div>
  );
}

export default App;
