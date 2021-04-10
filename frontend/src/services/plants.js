import { ActionCreators } from "../redux/plantsReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/plants',
})

//Calls backend API to reflect in the DB 
//After advising the backend, it calls Redux to reflect in the frontend
export const GetPlants = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setPlants(data));
    } catch {
        console.log('GetPlants Error');
    }
}

export const WaterPlant = async (dispatch, plant) => {
    try {
        dispatch(ActionCreators.waterPlant(plant));
    } catch (e) {
        console.log('WaterPlant Error');
        console.log(e);
    }
}

export const DryingPlant = async (dispatch, plant) => {
    try {
        dispatch(ActionCreators.dryingPlant(plant));
    } catch (e) {
        console.log('DryingPlant Error');
        console.log(e);
    }
}