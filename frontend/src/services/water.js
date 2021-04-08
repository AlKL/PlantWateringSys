import { ActionCreators } from "../redux/waterReducer";



export const GetWater = async (dispatch) => {
    try {
        //Call to API 
        //Fake temporary response
        const response = { value: 7 };

        dispatch(ActionCreators.setWater(response))


    } catch {
        console.log('Error');
    }
}