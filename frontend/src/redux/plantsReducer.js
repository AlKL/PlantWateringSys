const initialState = {
    plants: [],
}

// typing for ActionCreators
export const ActionTypes = {
    SET_PLANTS: 'SET_PLANTS',
    UPDATE_PLANT: 'UPDATE_PLANT'
}

// called by dispatch
export const ActionCreators = {
    setPlants: payload => ({ type: ActionTypes.SET_PLANTS, payload }),
    updatePlant: payload => ({ type: ActionTypes.UPDATE_PLANT, payload }),
}

const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        //Sets initial plants from db
        case ActionTypes.SET_PLANTS:
            return { ...state, plants: [...action.payload] };
        //Update water level
        case ActionTypes.UPDATE_PLANT:
            const waterId = action.payload.id;
            // gets the plant object from the state based on the id
            const findPlant = state.plants.find(p => p.id === waterId);
            // clone the found plant and update
            const wateredPlant = {
                ...findPlant,
                waterLevel: action.payload.waterLevel,
                hoursSinceWatered: action.payload.hoursSinceWatered
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