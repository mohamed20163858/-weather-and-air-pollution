import { createAsyncThunk } from '@reduxjs/toolkit';
import spacexTravelesHubAPIMethods from '../../spacexAPI/methods';

const JOIN = 'spacex-traveles-hub/src/redux/missions/JOIN';
const GET = 'spacex-traveles-hub/src/redux/missions/GET';
const LEAVE = 'spacex-traveles-hub/src/redux/missions/LEAVE';

export const joinMission = (index) => ({
  type: JOIN,
  payload: +index,

});
export const leaveMission = (index) => ({
  type: LEAVE,
  payload: +index,
});

export const fetchAllMissions = createAsyncThunk(
  GET,
  async () => {
    const response = await spacexTravelesHubAPIMethods.fetchMisions();
    const data = await response.json();
    const missions = Object.keys(data).map((key) => ({
      mission_id: data[key].mission_id,
      mission_name: data[key].mission_name,
      description: data[key].description,
    }));
    return missions;
  },
);
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN:
      return [
        ...state.slice(0, action.payload),
        { ...state[action.payload], reserved: true },
        ...state.slice(action.payload + 1),
      ];
    case LEAVE:
      return [
        ...state.slice(0, action.payload),
        { ...state[action.payload], reserved: false },
        ...state.slice(action.payload + 1),
      ];
    case `${GET}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};
export default missionsReducer;
