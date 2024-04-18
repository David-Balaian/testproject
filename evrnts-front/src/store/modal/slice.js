import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: {
    open: false,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      state.modalData = payload;
    },
  },
});

export default modalSlice.reducer;
