import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      {/* Outlest renders child component(s) i.e.: pages */}
      {/* allows to share the layout between groups of pages */}
      <Outlet />
    </div>
  );
};

export default Layout;
