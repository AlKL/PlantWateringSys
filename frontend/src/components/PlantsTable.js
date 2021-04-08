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

    return <table className='table table-dark'>
        <tbody>
            {
                plants.map(p =>
                    <tr>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => WaterPlant(dispatch, p)}>
                                Water!
                            </Button>
                        </td>
                        <td style={{ textAlign: 'left' }}>
                            {p.value}
                            -----WATER LEVEL: {p.waterLevel}
                        </td>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => DryingPlant(dispatch, p)}>
                                Dry!
                            </Button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
}