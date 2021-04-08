const initialState = {
    plants: [],
}

export const ActionTypes = {
    SET_PLANTS: 'SET_PLANTS',
}

export const ActionCreators = {
    setPlants: payload => ({ type: ActionTypes.SET_PLANTS, payload }),
}

//Plant Reducer
const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        //Sets initial plants from db
        case ActionTypes.SET_PLANTS:
            return { ...state, plants: [...action.payload] };
        //Increment water level
        case 'INC_WATER':
            console.log('start water, water level BEFORE WATERING = ' + state);
            return { ...state + 1 };
        //Decrement water level after 'an hour'
        case 'DEC_WATER':
            console.log('NEED water, water level BEFORE DRYING UP = ' + state);
            return { ...state - 1 };
        default:
            return state;
    }
}

export default plantReducer;