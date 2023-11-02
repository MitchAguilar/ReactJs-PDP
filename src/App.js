import { useEffect, useState } from "react";
import "./css/App.css";
import colmedica from "./assets/descarga.png";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./login";

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Login></Login>
      </Provider>
    </>
  );
}
export default App;
