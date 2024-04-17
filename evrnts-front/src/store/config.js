import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/slice';
import modalSlice from './modal/slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
  },
});
