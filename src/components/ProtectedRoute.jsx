import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


// Helper function to retrieve a cookie by name

const ProtectedRoute = ({ children }) => {
  // Check if the token exists in the cookies
  const token = Cookies.get("token");
  console.log("token", token);

  const isAuthenticated = Boolean(token); // Use Boolean to handle empty string and null
  console.log("isAuthenticated", isAuthenticated);

  if (!token) {
    console.error("Token is undefined. Ensure it is being set correctly.");
  }
  
  
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    console.warn("User not authenticated. Redirecting to login.");
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children components (e.g., dashboard)
  return children;
};

export default ProtectedRoute;
