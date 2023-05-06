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

import W_O_Redux from "./components/W_O_Redux";
import Redux from "./components/Redux";
import { Provider } from "react-redux";
import store from "./Store";
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
        path: "*",
        element: <Pagenotfound />,
      },
      {
        path: "/compA",
        element: <CompA />,
      },
      {
        path: "/woredux",
        element: <W_O_Redux />,
      },
      {
        path: "/redux",
        element: <Redux />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
