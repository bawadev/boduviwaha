import { createSlice } from '@reduxjs/toolkit';

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    login: true,
  },
  reducers: {
    updateLoginBanner: (state,action) => {
      state.login = action.payload.login;
    },
    
  },
});

export const { updateLoginBanner: updateLoginBanner } = homePageSlice.actions;
export default homePageSlice.reducer;
