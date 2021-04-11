import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetPlants, DecrementAllPlants } from '../services/plants';
import Plant from './PlantsObj';
import { Button } from 'react-bootstrap';

export const PlantsTable = () => {
    const plants = useSelector(state => state.plantsReducer.plants);
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        SetPlants(dispatch);
    }, []);

    useEffect(() => {
        DecrementAllPlants(dispatch, plants);
    }, [counter])

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setCounter(counter + 1);
    //     }, 3600000);

    //     return () => {
    //         clearTimeout(timeout);
    //     };
    // }, [counter]);   

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