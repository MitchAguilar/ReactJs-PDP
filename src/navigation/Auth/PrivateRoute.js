// A wrapper for <Route> that redirects to the login

import React from "react";
import { Navigate } from "react-router-dom";
import { ROOT,NOTFOUND } from  "../CONSTANT";

// screen if you're not yet authenticated.
const ProtectedRoute = ({ children }) => {
  if (
    sessionStorage.getItem("token") === null 
  ) {
    return <Navigate to={ROOT} replace />;
  }
  return children;
};
export default ProtectedRoute;