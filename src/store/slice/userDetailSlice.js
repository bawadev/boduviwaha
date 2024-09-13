import { createSlice } from '@reduxjs/toolkit';

const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState: {
    authDetails: null,
    userDetails: [],
    token: null
  },
  reducers: {
    updateAuthDetails: (state, action) => {
      state.authDetails = action.payload.authDetails;
    },
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload.userDetails;
    },
    updateToken: (state, action) => {
      state.token = action.payload.token;
    },
    clearAuthDetails: (state) => {
      state.authDetails = null;
      state.token = null;
    },
  },
});

export const { updateUserDetails, updateAuthDetails, updateToken, clearAuthDetails } = userDetailSlice.actions;
export default userDetailSlice.reducer;
