import { ActionCreators } from "../redux/plantsReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/plants',
})

// calls backend API to reflect in the DB 
// after advising the backend, it calls Redux to reflect in the frontend
export const SetPlants = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setPlants(data));
    } catch (e) {
        console.log('GetAllPlants Error');
        console.log(e);
    }
}

// api put request to backend to update plant's WaterLevel & DateTime watered
export const UpdatePlant = async (dispatch, plant) => {
    try {
        await axiosInstance.put('', plant);
        dispatch(ActionCreators.updatePlant(plant));
    } catch (e) {
        console.log('UpdatePlant Error');
        console.log(e);
    }
}

// api put request to backend to decrement all plant's water levels
// passed in an array current state of all plants
export const DecrementAllPlants = async (dispatch, plants) => {
    try {
        for (let i = 0; i < plants.length; i++) {
            const decrementedPlant = { ...plants[i], waterLevel: plants[i].waterLevel - 1, hoursSinceWatered: plants[i].hoursSinceWatered + 1 };
            //if waterLevel level is greater than 0, decrement the water level
            if (decrementedPlant.waterLevel >= 0) {
                await axiosInstance.put('', decrementedPlant);
                dispatch(ActionCreators.updatePlant(decrementedPlant));
            } else {
                //if water level is 0, we still need to increment time since watered using hoursSinceWatered
                const decrementedPlant = { ...plants[i], waterLevel: plants[i].waterLevel, hoursSinceWatered: plants[i].hoursSinceWatered + 1 };
                await axiosInstance.put('', decrementedPlant);
                dispatch(ActionCreators.updatePlant(decrementedPlant));
            }
        }
    } catch (e) {
        console.log('DecrementAllPlants Error');
        console.log(e);
    }
}