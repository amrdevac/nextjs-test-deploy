import axios from "axios";
import { setCookie } from "cookies-next";
import { encrypt } from "src/utils/encryption";
import { getRequest, setRequest } from "src/utils/request";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  isLoading: "",
  responseStatus: "",
  responseMessage: "",
  arrData: "",
  errData: "",
  arrOptional: "",
  username: "",
  password: "",
};

export const doingLoginApp = createAsyncThunk(
  "doingLoginApp",
  async (params, thunkAPI) => {
    try {
      const axiosHitLogin = await axios({
        method: "POST",
        url: "/api/auth",
        data: setRequest(params),
      });
      return axiosHitLogin;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const hitLoginBuilder = (builder) => {
  builder.addCase(doingLoginApp.pending, (state, payload) => {
    window.loading.showModal();
    state.isLoading = true;
  });

  builder.addCase(doingLoginApp.fulfilled, (state, action) => {
    const response = getRequest(action.payload.data);
    state.responseStatus = response.response_status;
    if (state.responseStatus == true) {
      const dateTime = Date.now();
      const expiredTime = parseInt(dateTime) + 30000;
      setCookie(
        "token",
        encrypt({
          token: response.data.token.accessToken,
          expired: expiredTime,
        })
      );
    }
    state.responseMessage = response.message;
  });

  builder.addCase(doingLoginApp.rejected, (state, action) => {
    if (action.payload?.data) {
      state.errData = action.payload.data;
      state.responseMessage = action.payload.message;
    } else {
      state.responseMessage = `Self Connection fail (${action.error.name})  : ${action.error.message}`;
    }
    window.loading.close();
    window.response_modal.showModal();
  });
};

const slice = createSlice({
  name: "LoginClass",
  initialState,
  extraReducers: (builder) => {
    hitLoginBuilder(builder);
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

module.exports.reducer = slice.reducer;
export const { setUsername, setPassword } = slice.actions;
