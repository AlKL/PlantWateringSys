import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { ProgressBar } from "react-bootstrap";
import { UpdatePlant } from '../services/plants';
import 'bootstrap/dist/css/bootstrap.min.css';

// a single plant object with methods for a specified plant
const PlantsObj = ({ p, img, name }) => {
    const dispatch = useDispatch();
    const [interv, setInterv] = useState();
    const [showStop, setShowStop] = useState(false);
    const [showCooldown, setShowCooldown] = useState(false);

    // increments the plant's water level by 1 [doesn't check anything]
    const waterPlant = (x) => {
        const plusWateredPlant = { ...p, waterLevel: x };
        UpdatePlant(dispatch, plusWateredPlant);
    }

    // being watering the plants from current water level to 10
    // the plant is watered every second until 10 or until stopped
    // [no parameter as we are working within the given plant obj]
    const startWatering = () => {
        // x tracks current water level
        let x = p.waterLevel;
        // y tracks 'setInterval' method so that it can be stopped later
        let y = setInterval(() => {
            x += 1;
            if (x <= 10) {
                waterPlant(x);
            } else {
                console.log('Watering Stopped');
                // stops setInterval method and hides showing the 'stop' button
                clearInterval(y);
                setShowStop(false);

                // natural progression stop, then water level must be 10
                // hoursSinceWatered is also now 0
                // reduct update + call to backend
                const justWateredPlant = { ...p, waterLevel: 10, hoursSinceWatered: 0 };
                UpdatePlant(dispatch, justWateredPlant);

                // to replace the stop button, the Cooldown button is displayed for 30s
                setShowCooldown(true);
                setTimeout(() => {
                    setShowCooldown(false);
                }, 30000);
            }
        }, 1000)
        setInterv(y);

        // show the stop button
        setShowStop(true);
    }

    // at anypoint when stopped is clicked before x = 10, we cancel the watering setInterval
    const stopWatering = () => {
        console.log('Watering Complete');
        clearInterval(interv);

        // hides showing the 'stop' button
        setShowStop(false);

        // redux update + call to update backend
        const justWateredPlant = { ...p, hoursSinceWatered: 0 };
        UpdatePlant(dispatch, justWateredPlant);

        // to replace the stop button, the Cooldown button is displayed for 30s
        setShowCooldown(true);
        setTimeout(() => {
            setShowCooldown(false);
        }, 30000);
    }

    // [testing] development method to manually decrease water levels by 1

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

    return (
        <div className={`plantContainer containerNo${p.id}`}>

            <div className='plantName'>
                {
                    // checks if current plant's water level is > 6
                    (p.hoursSinceWatered > 6)
                        ? <p id='alertP'>{name} has not been watered since {p.hoursSinceWatered} hours ago!</p>
                        : <p id='textId'>{name}</p>
                }
            </div>

            <div className='plantImgContainer'>
                <img src={img}></img>
            </div>

            <div className='plantText'>
                <div className='col'>
                    <p id='textId'>Water status</p>
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