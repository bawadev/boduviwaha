import { combineReducers } from '@reduxjs/toolkit';

import homePageSclice from './slice/homePageSclice';
import userDetailSlice from './slice/userDetailSlice';

const rootReducer = combineReducers({
  homepage: homePageSclice,
  userDetails: userDetailSlice
});

export default rootReducer;
