import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer, {
  savedStoreReducer, allCitiesReducer, allFlagsReducer, cityGeocodingReducer,
  cityWeatherReducer, cityAirPollutionReducer,
} from './cities/cities';

const rootReducer = combineReducers(
  {
    citiesInfo: citiesReducer,
    allCitiesInfo: allCitiesReducer,
    allFlagsInfo: allFlagsReducer,
    cityGeocodingInfo: cityGeocodingReducer,
    savedStoreInfo: savedStoreReducer,
    cityWeatherInfo: cityWeatherReducer,
    cityAirPollutionInfo: cityAirPollutionReducer,
  },
);
const store = configureStore({ reducer: rootReducer });
export default store;
