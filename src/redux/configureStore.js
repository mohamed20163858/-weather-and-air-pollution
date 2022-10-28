import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer, { savedStoreReducer, allCitiesReducer, allFlagsReducer } from './cities/cities';

const rootReducer = combineReducers(
  {
    citiesInfo: citiesReducer,
    allCitiesInfo: allCitiesReducer,
    allFlagsInfo: allFlagsReducer,
    savedStoreInfo: savedStoreReducer,
  },
);
const store = configureStore({ reducer: rootReducer });
export default store;
