import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  token: null,
  loading: false,
  errors: null,
  user: null,
};

const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    succesLogin(state, action) {
      state.isConnected = true;
      state.token = action.payload;
      state.loading = false;
    },

    setUserData(state, action) {
      state.user = action.payload;
    },

    loginFailed(state, action) {
      state.errors = action.payload;
      state.loading = false;
      state.token = null;
      state.user = null;
    },

    logOut(state) {
      state.isConnected = false;
      state.token = null;
      state.user = null;
      state.errors = null;
    },
  },
});

export const { checkToken ,succesLogin, setUserData, loginFailed, logOut } =
  userAuth.actions;

export default userAuth.reducer;
