import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
