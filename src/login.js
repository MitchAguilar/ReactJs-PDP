import React, { useState, useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/slices/login";

export default function Login() {
  const [sum, setSum] = React.useState(true);
  const dispatch = useDispatch();
  const { responseData: user } = useSelector((state) => state.user);

  useEffect(() => {
    //console.log("effect");
    //
    if (sessionStorage.getItem("ColmedicaLogin")) {
      sessionStorage.clear();
    }
    //sessionStorage.setItem('hola','esdt');
  }, [dispatch]);

  const loginA = () => {
    dispatch(login("user", "pass"));
  };
  //let { from } = location.state || { from: { pathname: USERDATA } };
  if (!(JSON.stringify(user) == "{}")) {
    console.log("está bien ");
  } else {
    console.log("todo mal");
  }
  return (
    <>
      <p>hi</p>
      <button onClick={loginA}> botón</button>
    </>
  );
}
