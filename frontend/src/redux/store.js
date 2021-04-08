import { configureStore } from '@reduxjs/toolkit';
import WaterReducer from './waterReducer';

export const store = configureStore({
  reducer: {
    waterReducer: WaterReducer,
  },
});
