const initialState = {
    plants: [],
}

export const ActionTypes = {
    SET_PLANTS: 'SET_PLANTS',
    WATER_PLANT: 'WATER_PLANT',
    DRYING_PLANT: 'DRYING_PLANT'
}

export const ActionCreators = {
    setPlants: payload => ({ type: ActionTypes.SET_PLANTS, payload }),
    waterPlant: payload => ({ type: ActionTypes.WATER_PLANT, payload }),
    dryingPlant: payload => ({ type: ActionTypes.DRYING_PLANT, payload })
}

//Plant Reducer
const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        //Sets initial plants from db
        case ActionTypes.SET_PLANTS:
            return { ...state, plants: [...action.payload] };
        //Increment water level
        case ActionTypes.WATER_PLANT:
            const waterId = action.payload.id;
            const findPlant = state.plants.find(p => p.id === waterId);
            const wateredPlant = {
                ...findPlant,
                waterLevel: findPlant.waterLevel + 1
            }
            return {
                ...state, plants: state.plants.map(plant =>
                    plant.id !== waterId ? plant : wateredPlant
                )
            }
        //Decrement water level after 'an hour'
        case ActionTypes.DRYING_PLANT:
            const dryId = action.payload.id;
            const findDryingPlant = state.plants.find(p => p.id === dryId);
            const dryingPlant = {
                ...findDryingPlant,
                waterLevel: findDryingPlant.waterLevel - 1
            }
            return {
                ...state, plants: state.plants.map(plant =>
                    plant.id !== dryId ? plant : dryingPlant
                )
            }
        default:
            return state;
    }
}

export default plantReducer;