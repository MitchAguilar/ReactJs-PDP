import { configureStore } from "@reduxjs/toolkit";

// reducers
import user from "./slices/login";

export default configureStore({
  reducer: {
    user,
  },
});
