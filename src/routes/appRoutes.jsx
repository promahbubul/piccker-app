import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import Welcome1 from "../pages/welcome/Welcome1/Welcome1";

import Welcome2 from "../pages/welcome/Welcome2/Welcome2";
import Welcome3 from "../pages/welcome/Welcome3/Welcome3";
import Welcome from "../pages/welcome/Welcome";
import Signin from "../pages/Signin/Signin";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Welcome1 />,
      },
      {
        path: "/welcome-2",
        element: <Welcome2 />,
      },
      {
        path: "/welcome-3",
        element: <Welcome3 />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);