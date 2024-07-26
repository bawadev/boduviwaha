import { createSlice } from '@reduxjs/toolkit';

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    login: true,
  },
  reducers: {
    markLogin: (state,action) => {
      state.login = action.payload.login;
    },
    
  },
});

export const { markLogin } = homePageSlice.actions;
export default homePageSlice.reducer;
