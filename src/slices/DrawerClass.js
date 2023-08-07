const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  title: "",
  rightButton: "",
  leftDownButton: "",
  leftButton: "",
};
const slice = createSlice({
  name: "DrawerClass",
  initialState,
  reducers: {
    setLeftButton: (state, action) => {
      state.leftButton = action.payload;
    },

    setLeftDownButton: (state, action) => {
      state.leftDownButton = action.payload;
    },

    setRightButton: (state, action) => {
      state.rightButton = action.payload;
    },

    resetButton: (state) => {
      state.rightButton = "";
      state.leftButton = "";
      state.leftDownButton = "";
    },
  },
});

module.exports.reducer = slice.reducer;
export const { resetButton, setLeftButton, setRightButton, setLeftDownButton } =
  slice.actions;
