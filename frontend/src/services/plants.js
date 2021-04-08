import { ActionCreators } from "../redux/plantsReducer";



export const GetPlants = async (dispatch) => {
    try {
        //Call to API 
        //Fake temporary response
        const response = [
            {value: 'Plant 1', waterLevel: 3, id: 1},
            {value: 'Plant 2', waterLevel: 4, id: 2},
            {value: 'Plant 3', waterLevel: 7, id: 3},
            {value: 'Plant 4', waterLevel: 0, id: 4},
            {value: 'Plant 5', waterLevel: 9, id: 5},
        ];

        dispatch(ActionCreators.setPlants(response));


    } catch {
        console.log('GetPlants Error');
    }
}

export const WaterPlant = async (dispatch, plant) => {
    try {
        dispatch(ActionCreators.waterPlant(plant));
    } catch(e) {
        console.log('WaterPlant Error');
        console.log(e);
    }
}

export const DryingPlant = async (dispatch, plant) => {
    try {
        dispatch(ActionCreators.dryingPlant(plant));
    } catch(e) {
        console.log('DryingPlant Error');
        console.log(e);
    }
}