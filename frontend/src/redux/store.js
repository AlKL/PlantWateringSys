import { configureStore } from '@reduxjs/toolkit';
import PlantsReducer from './plantsReducer';

export const store = configureStore({
  reducer: {
    plantsReducer: PlantsReducer,
  },
});
