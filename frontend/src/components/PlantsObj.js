import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { UpdatePlant } from '../services/plants';

const PlantsObj = ({ p }) => {
    const dispatch = useDispatch();
    const [interv, setInterv] = useState();

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
                console.log('Watering Complete');
                clearInterval(y);
            }
        }, 1000)
        setInterv(y);
    }

    //Stop's startWatering function
    const stopWatering = () => {
        console.log('Watering Complete');
        clearInterval(interv);
    }

    //Decreases plant water level until 0, decreases by 1 every hour - just for testing but don't really need due to dec all
    // const dropWaterLevel = (p) => {
    //     if (p.waterLevel > 0) {
    //         const dropWateredPlant = { ...p, waterLevel: p.waterLevel - 1 };
    //         UpdatePlant(dispatch, dropWateredPlant);
    //     }
    // }

    return (
        <tr>
            <td style={{ width: '3rem' }}>
                <Button className='btn btn-danger' onClick={() => startWatering()}>
                    Water!
                </Button>
            </td>
            <td style={{ width: '3rem' }}>
                <Button className='btn' onClick={() => stopWatering()}>
                    Stop!
                </Button>
            </td>
            <td style={{ textAlign: 'left' }}>
                Plant: {p.id}
            </td>
            <td style={{ textAlign: 'center' }}>
                WATER LEVEL: {p.waterLevel}
            </td>
            <td style={{ textAlign: 'right' }}>
                LAST TIME: {p.lastWaterTime}
            </td>
            {/* <td style={{ width: '3rem' }}>
                <Button className='btn' onClick={() => dropWaterLevel(p)}>
                    Dry!
                </Button>
            </td> */}
        </tr>
    )
}

export default PlantsObj;