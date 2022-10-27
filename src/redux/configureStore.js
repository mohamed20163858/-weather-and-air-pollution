import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/cities';

const rootReducer = combineReducers(
  {
    citiesInfo: citiesReducer,
  },
);
const store = configureStore({ reducer: rootReducer });
export default store;
