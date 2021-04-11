import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetPlants, DecrementAllPlants } from '../services/plants';
import Plant from './PlantsObj';
import plant1img from '../images/plant1.png'
import plant2img from '../images/plant2.png'
import plant3img from '../images/plant3.png'
import plant4img from '../images/plant4.png'
import plant5img from '../images/plant5.png'
import { Button } from 'react-bootstrap';

export const PlantsTable = () => {
    const plants = useSelector(state => state.plantsReducer.plants);
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(0);
    const [images, setImages] = useState([plant1img, plant2img, plant5img, plant4img, plant3img])
    const [names, setNames] = useState(["Michael", "Jim", "Dwight", "Pam", "Daryl"])

    useEffect(() => {
        SetPlants(dispatch);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        DecrementAllPlants(dispatch, plants);
        // eslint-disable-next-line
    }, [counter])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCounter(counter + 1);
        }, 3600000);

        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line
    }, [counter]);

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
                        name={names[p.id-1]}
                    />
                )
            }
            {/* <Button className='btn btn-danger' onClick={() => decrementPlants()}>Decrement All</Button> */}
        </div>
    )
}