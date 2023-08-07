import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  validation: null,
};

const slice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    resetValidation: () => initialState,
    setValidation: (state, action) => {
      state.validation = action.payload.validation;
    },
  },
});
module.exports.reducer = slice.reducer;
export const { setValidation, resetValidation } = slice.actions;
