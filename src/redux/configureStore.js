import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers(
  {
    missionInfo: missionsReducer,
    rocketInfo: rocketsReducer,
  },
);
const store = configureStore({ reducer: rootReducer });
export default store;
