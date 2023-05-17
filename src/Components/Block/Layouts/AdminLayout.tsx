/** @format */

import React from "react";
import Header from "../Header";
import Sider from "../Sider";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <Header />
      <Sider />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
