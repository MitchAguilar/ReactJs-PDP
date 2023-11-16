import { configureStore } from "@reduxjs/toolkit";

// reducers
import user from "./slices/login";
import userData from "./slices/UserData";

export default configureStore({
  reducer: {
    user,
    userData,
  },
});
