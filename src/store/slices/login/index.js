import { createSlice } from '@reduxjs/toolkit';

import Service from '../../../Services/Service';

export const userSlice = createSlice({
    name:'user',
    initialState:{
        responseData:{}
    },
    reducers:{
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
    const apiGet = new Service();
    
    const api=process.env.REACT_APP_API_URL;
    const endpoint=process.env.REACT_APP_LOGIN;
    /*axios
    .post(`${api}${endpoint}`,{
        user: user,
        pass: password
    })
    .then((response) => {//201 OK
      dispatch(setResponseData(response.data));
    })
    .catch((error) => console.log(error));*/
    //dispatch(setResponseData(response.data));
    apiGet
        .ServiceGet('https://jsonplaceholder.typicode.com/todos/1','')
        .then((respuesta) => {
            dispatch(setResponseData(respuesta))
        })
        .catch((res)=>{
            console.error('respuesta error',res);
        })

}

export const removeData=()=>(dispatch)=>{
    dispatch(clearState(false));
}