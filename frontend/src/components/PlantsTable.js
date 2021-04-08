import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DryingPlant, GetPlants, WaterPlant } from '../services/plants';
import { Button } from 'react-bootstrap';

export const PlantsTable = () => {
    const plants = useSelector(state => state.plantsReducer.plants);
    const dispatch = useDispatch();

    useEffect(() => {
        GetPlants(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    //Increase plant water level until level 10
    const startWatering = (p, waterLevel) => {
        setTimeout(() => {
            if (waterLevel < 10) {
                WaterPlant(dispatch, p)
                startWatering(p, waterLevel + 1)
            }
        }, 1000)
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
                    </tr>
                )
            }
        </tbody>
    </table>
}