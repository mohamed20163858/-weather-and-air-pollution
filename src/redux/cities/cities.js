import { createAsyncThunk } from '@reduxjs/toolkit';
import citiesAPIMethods from '../../citiesAPI/methods';

const GET = 'weather-and-air-pollution/src/redux/cities/GET';
const GETALL = 'weather-and-air-pollution/src/redux/cities/GETALL';
const FETCHFLAGS = 'weather-and-air-pollution/src/redux/cities/FETCHFLAGS';
const FILTER = 'weather-and-air-pollution/src/redux/cities/FILTER';

export const fetchAllCaptialCities = createAsyncThunk(
  GET,
  async () => {
    const response = await citiesAPIMethods.fetchAllCaptialCities();
    const { data } = await response.json();
    const cities = Object.keys(data).map((key) => ({
      id: key,
      country: data[key].name,
      cities: [data[key].capital],
      iso2: data[key].iso2,
      iso3: data[key].iso3,
    }));
    return cities;
  },
);
export const fetchFilteredCaptialCity = (data) => ({
  type: FILTER,
  payload: data,
});
export const fetchAllCountryCities = createAsyncThunk(
  GETALL,
  async () => {
    const response = await citiesAPIMethods.fetchAllCountryCities();
    const { data } = await response.json();
    return data;
  },
);
export const fetchAllCountriesFlags = createAsyncThunk(
  FETCHFLAGS,
  async () => {
    const response = await citiesAPIMethods.fetchALLCountriesFlags();
    const { data } = await response.json();
    return data;
  },
);
export const savedStoreReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER:
      return [...action.payload];
    default:
      return state;
  }
};
export const allCitiesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GETALL}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export const allFlagsReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCHFLAGS}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export default citiesReducer;
