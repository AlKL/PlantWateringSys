import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DryingPlant, GetPlants, WaterPlant } from '../services/plants';
import { Button } from 'react-bootstrap';

export const PlantsTable = () => {
    const plants = useSelector(state => state.plantsReducer.plants);
    const dispatch = useDispatch();
    const [watering, setWatering] = useState(false);

    useEffect(() => {
        GetPlants(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        GetPlants(dispatch);
    }, [dispatch, watering]);

    //Increase plant water level until level 10
    const startWatering = (p, waterLevel) => {
        WaterPlant(dispatch, p)
        setWatering(!watering);
        console.log(plants[0]);

        // test(watering);

        // setTimeout(() => {
        //     if (waterLevel < 10 && watering) {
        //         startWatering(p, waterLevel + 1)
        //     }
        // }, 1000)
    }

    return <table className='table table-dark'>
        <tbody>
            {
                plants.map(p =>
                    <tr key={p.id}>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => startWatering(p, p.waterLevel)}>
                                Water!
                            </Button>
                        </td>
                        <td style={{ textAlign: 'left' }}>
                            {p.value}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                            WATER LEVEL: {p.waterLevel}
                        </td>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn' onClick={() => DryingPlant(dispatch, p)}>
                                Dry!
                            </Button>
                        </td>
                        {/* <td style={{ width: '3rem' }}>
                            <Button className='btn' onClick={() => stopWatering(p)}>
                                Stop!
                            </Button>
                        </td> */}
                    </tr>
                )
            }
        </tbody>
    </table>
}