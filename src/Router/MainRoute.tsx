/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Components/Block/Layouts/UserLayout";
import HomeScreen from "../Pages/User/HomeScreen";
import AdminLayout from "../Components/Block/Layouts/AdminLayout";
import DashBoard from "../Pages/Admin/DashBoard";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
    ],
  },
]);
