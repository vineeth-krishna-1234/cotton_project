 import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./authSlicer";

export default configureStore({
  reducer: {
    authreducer: authSliceReducer,
  },
});
