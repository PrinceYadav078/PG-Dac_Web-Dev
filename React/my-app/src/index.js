import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import App1 from "./App1";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Pagenotfound from "./components/Pagenotfound";
import Showdata from "./components/Showdata";

// console.log("Hello World");
// console.log(React);
// console.log(ReactDOM);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App1 />,
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
        path: "show",
        element: <Showdata />,
      },
      {
        path: "*",
        element: <Pagenotfound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(
  // <App/>
//   <App1 />
<RouterProvider router={router} />
    
);
