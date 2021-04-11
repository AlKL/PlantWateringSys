const initialState = {
    plants: [],
}

export const ActionTypes = {
    SET_PLANTS: 'SET_PLANTS',
    UPDATE_PLANT: 'UPDATE_PLANT'
}

export const ActionCreators = {
    setPlants: payload => ({ type: ActionTypes.SET_PLANTS, payload }),
    updatePlant: payload => ({ type: ActionTypes.UPDATE_PLANT, payload }),
}

const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        //Sets initial plants from db
        case ActionTypes.SET_PLANTS:
            return { ...state, plants: [...action.payload] };
        //Increment water level
        case ActionTypes.UPDATE_PLANT:
            const waterId = action.payload.id;
            const findPlant = state.plants.find(p => p.id === waterId);
            const wateredPlant = {
                ...findPlant,
                waterLevel: action.payload.waterLevel,
                lastWaterTime: action.payload.lastWaterTime
            }
            return {
                ...state, plants: state.plants.map(plant =>
                    plant.id !== waterId ? plant : wateredPlant
                )
            }
        default:
            return state;
    }
}

export default plantReducer;