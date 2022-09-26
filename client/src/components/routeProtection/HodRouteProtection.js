import React from "react";
import ProfileComp from "../ProfilePage/profilePage";
import { Outlet } from "react-router-dom";
function HodRouteProtection() {
  const hodStatus = 1;
  return hodStatus ? <Outlet /> : <ProfileComp />;
}

export default HodRouteProtection;
