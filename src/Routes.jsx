import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const Frame1116606593 = React.lazy(() => import("pages/Frame1116606593"));
const Customersempty = React.lazy(() => import("pages/Customersempty"));
const Categoriesempty = React.lazy(() => import("pages/Categoriesempty"));
const Productsempty = React.lazy(() => import("pages/Productsempty"));
const ProductsemptyOne = React.lazy(() => import("pages/ProductsemptyOne"));
const Settingsnotifications = React.lazy(
  () => import("pages/Settingsnotifications"),
);
const Addcustomer = React.lazy(() => import("pages/Addcustomer"));
const Customerinfo = React.lazy(() => import("pages/Customerinfo"));
const Customers = React.lazy(() => import("pages/Customers"));
const Article = React.lazy(() => import("pages/Article"));
const Orders = React.lazy(() => import("pages/Orders"));
const Addproducts = React.lazy(() => import("pages/Addproducts"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Registrationcomplete = React.lazy(
  () => import("pages/Registrationcomplete"),
);
const Emailconfirmation = React.lazy(() => import("pages/Emailconfirmation"));
const Passwordreset = React.lazy(() => import("pages/Passwordreset"));
const Login = React.lazy(() => import("pages/Login"));
const Products = React.lazy(() => import("pages/Products"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={Products} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordreset" element={<Passwordreset />} />
          <Route path="/emailconfirmation" element={<Emailconfirmation />} />
          <Route
            path="/registrationcomplete"
            element={<Registrationcomplete />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route
            path="/addproducts"
            element={<ProtectedRoute element={Addproducts} />}
          />
          <Route path="/orders" element={<ProtectedRoute element={Orders} />} />
          <Route
            path="/article"
            element={<ProtectedRoute element={Article} />}
          />
          <Route
            path="/customers"
            element={<ProtectedRoute element={Customers} />}
          />
          <Route
            path="/customerinfo"
            element={<ProtectedRoute element={Customerinfo} />}
          />
          <Route
            path="/addcustomer"
            element={<ProtectedRoute element={Addcustomer} />}
          />
          <Route
            path="/settingsnotifications"
            element={<ProtectedRoute element={Settingsnotifications} />}
          />
          <Route
            path="/productsemptyone"
            element={<ProtectedRoute element={ProductsemptyOne} />}
          />
          <Route
            path="/productsempty"
            element={<ProtectedRoute element={Productsempty} />}
          />
          <Route
            path="/categoriesempty"
            element={<ProtectedRoute element={Categoriesempty} />}
          />
          <Route
            path="/customersempty"
            element={<ProtectedRoute element={Customersempty} />}
          />
          <Route
            path="/frame1116606593"
            element={<ProtectedRoute element={Frame1116606593} />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
