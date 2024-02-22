import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const authkey = localStorage.getItem("authkey");

  if (
    !authkey &&
    [
      "/",
      "/dashboard",
      "/addproducts",
      "/orders",
      "/article",
      "/customers",
      "/customerinfo",
      "/addcustomer",
      "/settingsnotifications",
      "/productsemptyone",
      "/productsempty",
      "/categoriesempty",
      "/customersempty",
      "/frame1116606593",
    ].includes(pathname)
  ) {
    return <Navigate to="/dhiwise-dashboard" />;
  }
  return <Element />;
};
