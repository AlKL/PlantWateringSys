import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { ProgressBar } from "react-bootstrap";
import { UpdatePlant } from '../services/plants';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlantsObj = ({ p, img, name }) => {
    const dispatch = useDispatch();
    const [interv, setInterv] = useState();
    const [showStop, setShow] = useState(false);
    const [showCooldown, setShowCooldown] = useState(false);

    //Increments plant water level until level 10
    const waterPlant = (x) => {
        console.log('Plant ID:  ' + p.id);
        const plusWateredPlant = { ...p, waterLevel: x };
        UpdatePlant(dispatch, plusWateredPlant);
    }

    //Repeat calls to waterPlant
    const startWatering = () => {
        let x = p.waterLevel;
        let y = setInterval(() => {
            x += 1;
            if (x <= 10) {
                waterPlant(x)
            } else {
                console.log('Watering Stopped');
                clearInterval(y);
                setShow(false);

                const justWateredPlant = { ...p, waterLevel: 10, hoursSinceWatered: 0 };
                UpdatePlant(dispatch, justWateredPlant);

                setShowCooldown(true);
                setTimeout(() => {
                    setShowCooldown(false);
                }, 5000);
            }
        }, 1000)
        setInterv(y);
        setShow(true);
    }

    //Stop's startWatering function
    const stopWatering = () => {
        console.log('Watering Complete');
        clearInterval(interv);
        setShow(false);

        const justWateredPlant = { ...p, hoursSinceWatered: 0 };
        UpdatePlant(dispatch, justWateredPlant);

        setShowCooldown(true);
        setTimeout(() => {
            setShowCooldown(false);
        }, 5000);
    }

    // // Decreases plant water level until 0, decreases by 1 every hour - just for testing but don't really need due to dec all
    // const dropWaterLevel = (p) => {
    //     if (p.waterLevel > 0) {
    //         const dropWateredPlant = { ...p, waterLevel: p.waterLevel - 1 };
    //         UpdatePlant(dispatch, dropWateredPlant);
    //     }
    // }

    const startButton = (
        <Button className='btn' onClick={() => startWatering()}>
            Water
        </Button>
    )

    const stopButton = (
        <Button className='btn btn-danger' onClick={() => stopWatering()}>
            Stop
        </Button>
    )

    const cooldownButton = (
        <Button className='btn btn-secondary'>
            Cooldown
        </Button>
    )

    const sixHoursSinceWatered = (
        <Button className='btn btn-secondary'>
            !!!!!!
        </Button>
    )

    return (
        <div className={`plantContainer containerNo${p.id}`}>

            <div className='plantName'>
                {name}
            </div>

            <div className='plantImgContainer'>
                <img src={img}></img>
            </div>

            <div className='plantText'>
                <div className='col'>
                    <p id='textId'>Water level</p>
                    <ProgressBar now={p.waterLevel * 10} label={`${p.waterLevel * 10}%`} />
                </div>

                <div className='actionButton'>
                    {showStop ? stopButton : (showCooldown ? cooldownButton : startButton)}
                </div>
            </div>
        </div>
    )
}

export default PlantsObj;