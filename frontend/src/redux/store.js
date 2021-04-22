import { configureStore } from '@reduxjs/toolkit';
import PlantsReducer from './plantsReducer';

// store to outline all reducers that will be used - just plantsReducer 
export const store = configureStore({
  reducer: {
    plantsReducer: PlantsReducer,
  },
});
