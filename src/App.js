
import { useState } from 'react';
import './css/App.css';
import colmedica from './assets/descarga.png';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
 
  return (
   <>
   <Provider store={store}>

   </Provider>
   </>
  );
}
export default App;
