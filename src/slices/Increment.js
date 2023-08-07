const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
};

const slice = createSlice({
  name: "increment",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
    },
    paramsValue: (state, action) => {
      state.value += parseInt(action.payload);
    },
  },
});

module.exports.reducer = slice.reducer;
export const { increment, decrement, paramsValue } = slice.actions;
