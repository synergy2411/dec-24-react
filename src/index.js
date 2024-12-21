import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Expenses from "./components/Expenses/Expenses";

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:3000
    element: <h1>Home Page</h1>,
  },
  {
    path: "/expenses",
    element: <Expenses />,
  },
  {
    path: "/contact",
    element: <h1>Contact us Page</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
