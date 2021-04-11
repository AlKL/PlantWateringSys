import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdatePlant, GetPlants, DecrementAllPlants } from '../services/plants';
import Plant from './PlantsObj';
import { Button } from 'react-bootstrap';

//if all else fails, make new components out of each plant? Map these components so you can deal with them individually
export const PlantsTable = () => {
    const [watering, setWatering] = useState(true);
    const plants = useSelector(state => state.plantsReducer.plants);
    const dispatch = useDispatch();
    const [interv, setInterv] = useState();

    useEffect(() => {
        GetPlants(dispatch);
    }, []);

    const decrementPlants = () => {
        DecrementAllPlants(dispatch, plants);
    }

    return (
        <div>
            <table className='table table-dark'>
                <tbody>
                    {
                        plants.map(p =>
                            <Plant
                                key={p.id}
                                p={p}
                            />
                        )
                    }
                </tbody>
            </table>
            <Button className='btn btn-danger' onClick={() => decrementPlants()}>Decrement All</Button>
        </div>
    )
}

        // if (p.waterLevel < 10) {
        //     WaterPlant(dispatch, p)
        // }
        // setWatering(!watering);
        // console.log(plants[0]);

        // test(watering);

        // setTimeout(() => {
        //     if (waterLevel < 10 && watering) {
        //         startWatering(p, waterLevel + 1)
        //     }
        // }, 1000)