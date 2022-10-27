import { createAsyncThunk } from '@reduxjs/toolkit';
import citiesAPIMethods from '../../citiesAPI/methods';

const GET = 'weather-and-air-pollution/src/redux/cities/GET';

export const fetchAllCaptialCities = createAsyncThunk(
  GET,
  async () => {
    const response = await citiesAPIMethods.fetchAllCaptialCities();
    const { data } = await response.json();
    return data;
  },
);
const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export default citiesReducer;
