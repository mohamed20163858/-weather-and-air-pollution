import { createAsyncThunk } from '@reduxjs/toolkit';
import spacexTravelesHubAPIMethods from '../../spacexAPI/methods';

const RESERVE = 'spacex-traveles-hub/src/redux/rockets/RESERVE';
const CANCEL = 'spacex-traveles-hub/src/redux/rockets/CANCEL';
const GET = 'spacex-traveles-hub/src/redux/rockets/GET';

export const reserveRocket = (index) => ({
  type: RESERVE,
  payload: +index,

});
export const cancelRocket = (index) => ({
  type: CANCEL,
  payload: +index,
});

export const fetchAllRockets = createAsyncThunk(
  GET,
  async () => {
    const response = await spacexTravelesHubAPIMethods.fetchRockets();
    const data = await response.json();
    const rockets = Object.keys(data).map((key) => ({
      id: data[key].id,
      rocket_name: data[key].rocket_name,
      description: data[key].description,
      flickr_images: data[key].flickr_images,
    }));
    return rockets;
  },
);
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case RESERVE:
      return [
        ...state.slice(0, action.payload - 1),
        { ...state[action.payload - 1], reserved: true },
        ...state.slice(action.payload),
      ];
    case CANCEL:
      return [
        ...state.slice(0, action.payload - 1),
        { ...state[action.payload - 1], reserved: false },
        ...state.slice(action.payload),
      ];
    case `${GET}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export default rocketsReducer;
