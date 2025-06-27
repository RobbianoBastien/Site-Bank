import { configureStore } from "@reduxjs/toolkit";
import userAuthreducer from "./userSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthreducer,
  },
});

export default store;