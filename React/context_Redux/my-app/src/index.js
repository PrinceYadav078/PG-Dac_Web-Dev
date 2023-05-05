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
import W_O_Redux from "./components/W_O_Redux";
import Redux from "./components/Redux";
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
      {
        path: "/woredux",
        element: <W_O_Redux/>,
      },
      {
        path: "/redux",
        element: <Redux/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(

<RouterProvider router={router} />
    
);
