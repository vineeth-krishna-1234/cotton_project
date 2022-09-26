import React from "react";
import LoginPage from "../Loginpage/LoginPage";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
function ProtectedRoute() {
  const authToken = 1//useSelector((state) => state.authreducer.authToken);
  return authToken ? <Outlet /> : <LoginPage />;
}

export default ProtectedRoute;
