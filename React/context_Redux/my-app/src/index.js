import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Home from "./components/Home";


import Pagenotfound from "./components/Pagenotfound";
import CompA from "./components/CompA";
import ErrorBoundary from "./components/ErrorBoundary";
// console.log("Hello World");
// console.log(React);
// console.log(ReactDOM);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "err",
        element: <ErrorBoundary />,
      },
      {
        path: "*",
        element: <Pagenotfound />,
      },
      {
        path: "/compA",
        element: <CompA />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(

<RouterProvider router={router} />
    
);
