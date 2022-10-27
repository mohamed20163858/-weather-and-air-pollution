import { createAsyncThunk } from '@reduxjs/toolkit';
import citiesAPIMethods from '../../citiesAPI/methods';

const GET = 'weather-and-air-pollution/src/redux/cities/GET';
const FILTER = 'weather-and-air-pollution/src/redux/cities/FILTER';

export const fetchAllCaptialCities = createAsyncThunk(
  GET,
  async () => {
    const response = await citiesAPIMethods.fetchAllCaptialCities();
    const { data } = await response.json();
    return data;
  },
);
export const fetchFilteredCaptialCities = (data) => ({
  type: FILTER,
  payload: data,
});
export const fetchAllCountryCities = createAsyncThunk(
  GET,
  async () => {
    const response = await citiesAPIMethods.fetchAllCountryCities();
    const { data } = await response.json();
    return data;
  },
);
const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return [...action.payload];
    case FILTER:
      return [...action.payload];
    default:
      return state;
  }
};
export default citiesReducer;
