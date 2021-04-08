import { ActionCreators } from "../redux/plantReducer";



export const GetPlants = async (dispatch) => {
    try {
        //Call to API 
        //Fake temporary response
        const response = [
            {value: 'Plant 1', waterLevel: 1},
            {value: 'Plant 2', waterLevel: 2},
            {value: 'Plant 3', waterLevel: 3},
            {value: 'Plant 4', waterLevel: 4},
            {value: 'Plant 5', waterLevel: 5},
        ];

        dispatch(ActionCreators.setPlants(response));


    } catch {
        console.log('Error');
    }
}