import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetPlants, DecrementAllPlants } from '../services/plants';
import Plant from './PlantsObj';
import plant1img from '../images/plant1.png'
import plant2img from '../images/plant2.png'
import plant3img from '../images/plant3.png'
import plant4img from '../images/plant4.png'
import plant5img from '../images/plant5.png'
import { Button } from 'react-bootstrap'; // [testing]

// component used to map out all the plants 
export const PlantsTable = () => {
    // useSelector gets the plant's state from the Redux store which holds the applications' state
    const plants = useSelector(state => state.plantsReducer.plants);
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(0);
    const [images, setImages] = useState([plant1img, plant2img, plant5img, plant4img, plant3img])
    const [names, setNames] = useState(["Michael", "Jim", "Dwight", "Pam", "Darryl"])

    // gets initial plant state
    useEffect(() => {
        SetPlants(dispatch);
        // eslint-disable-next-line
    }, []);

    // decrements all plant's water levels when counter changes
    useEffect(() => {
        DecrementAllPlants(dispatch, plants);
        // eslint-disable-next-line
    }, [counter])

    // changes the counter every hour
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCounter(counter + 1);
        }, 3600000);

        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line
    }, [counter]);

    // [testing] method to decrement all plant levels
    const decrementPlants = () => {
        DecrementAllPlants(dispatch, plants);
    }

    return (
        <div className='plantsSection'>
            {
                plants.map(p =>
                    <Plant
                        key={p.id}
                        p={p}
                        img={images[p.id - 1]}
                        name={names[p.id - 1]}
                    />
                )
            }
            {/* <Button className='btn btn-danger' onClick={() => decrementPlants()}>Decrement All</Button> */}
        </div>
    )
}