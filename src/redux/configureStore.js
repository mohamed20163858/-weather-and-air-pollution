import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer, { savedStoreReducer } from './cities/cities';

const rootReducer = combineReducers(
  {
    citiesInfo: citiesReducer,
    savedStoreInfo: savedStoreReducer,
  },
);
const store = configureStore({ reducer: rootReducer });
export default store;
