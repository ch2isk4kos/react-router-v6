import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>Access Restricted</h1>
      <em>You need credentials to access this page.</em>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Unauthorized;
