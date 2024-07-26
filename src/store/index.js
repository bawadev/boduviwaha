import { combineReducers } from '@reduxjs/toolkit';
import homePageSclice from './slice/homePageSclice';

const rootReducer = combineReducers({
  homepage: homePageSclice,
});

export default rootReducer;
