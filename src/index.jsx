import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Employees from './pages/Employees'
import EmployeeDetails from "./pages/EmployeeDetails"
import Report from "./pages/Report"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path : "/employees",
    element : <Employees/>
  }, 
  {
    path : "/employees/:employeeId",
    element : <EmployeeDetails/>
  }, {
    path : "report",
    element : <Report/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
