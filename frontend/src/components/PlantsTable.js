import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdatePlant, GetPlants } from '../services/plants';
import { Button } from 'react-bootstrap';

export const PlantsTable = () => {
    const plants = useSelector(state => state.plantsReducer.plants);
    const dispatch = useDispatch();
    // const [watering, setWatering] = useState(false);

    useEffect(() => {
        GetPlants(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     GetPlants(dispatch);
    // }, [dispatch, watering]);

    //Increase plant water level until level 10
    const startWatering = (p) => {
        const plusWateredPlant = { ...p, waterLevel: p.waterLevel + 1 };
        UpdatePlant(dispatch, plusWateredPlant);
    }

    //Decreases plant water level until 0, decreases by 1 every hour
    const dropWaterLevel = (p) => {
        const dropWateredPlant = { ...p, waterLevel: p.waterLevel - 1};
        UpdatePlant(dispatch, dropWateredPlant);
    }

    return <table className='table table-dark'>
        <tbody>
            {
                plants.map(p =>
                    <tr key={p.id}>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => startWatering(p)}>
                                Water!
                            </Button>
                        </td>
                        <td style={{ textAlign: 'left' }}>
                            Plant: {p.id}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                            WATER LEVEL: {p.waterLevel}
                        </td>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn' onClick={() => dropWaterLevel(p)}>
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