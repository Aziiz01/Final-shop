import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import ErrorPage from "./components/errorElement";
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement:<ErrorPage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

