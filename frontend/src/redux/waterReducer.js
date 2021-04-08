

export const ActionTypes = {
    SET_WATER: 'SET_WATER',
}

export const ActionCreators = {
    setWater: payload => ({ type: ActionTypes.SET_WATER, payload }),
}

//Water Reducer
const waterReducer = (state = 4, action) => {
    switch (action.type) {
        //Sets initial water level
        case ActionTypes.SET_WATER:
            return state;
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

export default waterReducer;