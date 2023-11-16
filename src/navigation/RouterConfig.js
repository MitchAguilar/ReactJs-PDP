import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Views/Login";
import UserData from "../Views/UserData";
import NotFoundPage  from "../Views/NotFound";
import { ROOT, USERDATA, LOGIN, NOTFOUND } from "../navigation/CONSTANT";
import ProtectedRoute from "./Auth/PrivateRoute";

export const RouterConfig = () => {
  return (
    <div className="bodyLogin">
      <Routes>
        {/* List all public routes here */}
        <Route relative path={ROOT} element={<Login />} />
        <Route relative path={LOGIN} element={<Login />} />
        {/* List all private routes here */}
        <Route
          relative
          path={USERDATA}
          element={
            <ProtectedRoute>
              <UserData />
            </ProtectedRoute>
          }
        />
        {/* Not found routes */}
        <Route  path={NOTFOUND} element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
};
