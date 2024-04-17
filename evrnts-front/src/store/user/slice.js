import { createSlice } from '@reduxjs/toolkit';
import { TH_signin, TH_signout } from './thunk';

const initialState = {
  userData: {
    email: null,
    firstName: null,
    lastName: null,
  },
  isLogged: false,
  loading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, {payload}) => {
      state.userData = payload;
      state.isLogged = true;
    },
    logout: (state)=>{
      state.userData = initialState.userData;
      state.isLogged = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(TH_signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(TH_signin.fulfilled, (state) => {
        state.loading = false;
        state.isLogged = true;
      })
      .addCase(TH_signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLogged = false;
      })
      .addCase(TH_signout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(TH_signout.fulfilled, (state) => {
        state.loading = false;
        state.userData = initialState.userData;
        state.isLogged = false;
      })
      .addCase(TH_signout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLogged = false;
      })
  },

});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
