import { createAsyncThunk } from '@reduxjs/toolkit';
import citiesAPIMethods from '../../citiesAPI/methods';

const GET = 'weather-and-air-pollution/src/redux/cities/GET';
const GET_ALL = 'weather-and-air-pollution/src/redux/cities/GET_ALL';
const FETCH_FLAGS = 'weather-and-air-pollution/src/redux/cities/FETCH_FLAGS';
const FETCH_GEOCODING = 'weather-and-air-pollution/src/redux/cities/FETCH_GEOCODING';
const FETCH_WEATHER = 'weather-and-air-pollution/src/redux/cities/FETCH_WEATHER';
const FETCH_AIR_POLLUTION = 'weather-and-air-pollution/src/redux/cities/FETCH_AIR_POLLUTION';
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
  GET_ALL,
  async () => {
    const response = await citiesAPIMethods.fetchAllCountryCities();
    const { data } = await response.json();
    return data;
  },
);
export const fetchAllCountriesFlags = createAsyncThunk(
  FETCH_FLAGS,
  async () => {
    const response = await citiesAPIMethods.fetchALLCountriesFlags();
    const { data } = await response.json();
    return data;
  },
);
export const fetchCityGeocoding = createAsyncThunk(
  FETCH_GEOCODING,
  async (info) => {
    const response = await citiesAPIMethods.fetchCityGeocoding(info[0], info[1]);
    const data = await response.json();
    return data;
  },
);
export const fetchCityWeather = createAsyncThunk(
  FETCH_WEATHER,
  async (info) => {
    const response = await citiesAPIMethods.fetchCityWeather(info[0], info[1]);
    const data = await response.json();
    return data;
  },
);
export const fetchCityAirPollution = createAsyncThunk(
  FETCH_AIR_POLLUTION,
  async (info) => {
    const response = await citiesAPIMethods.fetchCityAirPollution(info[0], info[1]);
    const data = await response.json();
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
    case `${GET_ALL}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export const allFlagsReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_FLAGS}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export const cityGeocodingReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_GEOCODING}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export const cityWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_WEATHER}/fulfilled`:
      return { ...action.payload };
    default:
      return state;
  }
};
export const cityAirPollutionReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_AIR_POLLUTION}/fulfilled`:
      return { ...action.payload };
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
