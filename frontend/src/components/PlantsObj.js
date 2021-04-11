import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { UpdatePlant } from '../services/plants';

const PlantsObj = ({ p }) => {
    const dispatch = useDispatch();
    const [interv, setInterv] = useState();

    const waterPlant = () => {
        console.log('lol');
        const plusWateredPlant = { ...p, waterLevel: p.waterLevel + 1 };
        UpdatePlant(dispatch, plusWateredPlant);
    }

    //Increase plant water level until level 10
    const startWatering = () => {

        setInterv(
            setInterval(() => {
                waterPlant()
            }, 1000)
        )

        // if (p.waterLevel < 10) {
        //     waterPlant(p);
        //     setInterv(setInterval(5000))
        // }

        // setTimeout(() => {
        //     if (p.waterLevel < 10) {
        //         const plusWateredPlant = { ...p, waterLevel: p.waterLevel + 1 };
        //         UpdatePlant(dispatch, plusWateredPlant);
        //         startWatering(plusWateredPlant);
        //     } 
        // }, 1000)
    }

    const stopWatering = () => {
        clearInterval(interv);
    }

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
            {/* <td style={{ width: '3rem' }}>
                <Button className='btn' onClick={() => decrementPlants()}>
                    DecrementAll!
                </Button>
            </td> */}
        </tr>
    )
}

export default PlantsObj;