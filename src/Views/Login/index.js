import React, { useState, useEffect } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { USERDATA } from "../../navigation/CONSTANT";
// redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/login";

import '../../css/login/Login.css';

function redirectToHome(from) {
  return <Navigate to={from} />;
}

export default function Login() {
  const [MensajeError, setMensajeError] = React.useState(false);
  let location = useLocation();
  
  const { responseData: user } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("effect");
    //
    if (sessionStorage.getItem("token")) {
      sessionStorage.clear();
    }
    //sessionStorage.setItem('hola','esdt');
  }, [dispatch]);

  const loginA = () => {
    dispatch(login("user", "pass"));
  };
  
  let { from } = location.state || { from: { pathname: USERDATA } };
  if (!(JSON.stringify(user) == "{}")) {
    console.log("está bien ",JSON.stringify(user));
    sessionStorage.setItem('token', user.title);
    return redirectToHome(from);
  } else {
    console.log("todo mal",JSON.stringify(user));
  }
  /***
   *  <p>hi</p>
      <button onClick={loginA}> botón</button>
   */
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="username" required></input>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required></input>
            <label>Password</label>
          </div>
          <a href="#" onClick={loginA}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </>
  );
}
