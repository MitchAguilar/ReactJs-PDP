import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    responseData: {
      numeroCelular: "",
      email: "",
      cedula: "",
      nombre: ""
    }
  },
  reducers: {
    setResponseData: (state, action) => {
      state.responseData = action.payload;
    }
  },
});
export const { setResponseData } = userDataSlice.actions;

export default userDataSlice.reducer;

export const getUserData = () => (dispatch) => {
  dispatch(setResponseData({numeroCelular: "3134360567",
  email: "maicol.aguilar@softwareone.com",
  cedula: "1117553160",
  nombre: "Mitch Aguilar"}));
};
