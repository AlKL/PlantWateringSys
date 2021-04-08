import { configureStore } from '@reduxjs/toolkit';
import PlantReducer from './plantReducer';

export const store = configureStore({
  reducer: {
    plantReducer: PlantReducer,
  },
});
