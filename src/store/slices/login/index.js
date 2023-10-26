import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
    name:'user',
    initialState:{
        responseData:{}
    },
    reducecers:{
        setResponseData: (state,action) =>{
            state.responseData = action.payload;
        },
        clearState:(state,action) =>{
            state.responseData.exitoso = action.payload;
        }
    }
});

export const {setResponseData} = userSlice.actions;
export const {clearState} = userSlice.actions;
export default userSlice.reducer;

export const login = (user, password) => (dispatch)=>{
    const api=process.env.REACT_APP_API_URL;
    const endpoint=process.env.REACT_APP_LOGIN;
    axios
    .post(`${api}${endpoint}`,{
        user: user,
        pass: password
    })
    .then((response) => {//201 OK
      dispatch(setResponseData(response.data));
    })
    .catch((error) => console.log(error));
}

export const removeData=()=>(dispatch){
    dispatch(clearState(false));
}