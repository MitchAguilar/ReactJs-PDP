import { configureStore } from "@reduxjs/toolkit";

import user  from "./slices/login";

export default configureStore({
    reducer:{
        user
    }
});