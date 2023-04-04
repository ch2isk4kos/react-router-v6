import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/authentication/index";

const Private = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleOnLogout = useCallback(
    (e) => {
      e.preventDefault();
      setUser(null);
      navigate("/");
    },
    [setUser]
  );

  return (
    <div className="Private">
      <h1>Private Page</h1>
      <p>
        Welcome <strong>{user?.username}</strong>
      </p>
      <button onClick={handleOnLogout}>Logout</button>
    </div>
  );
};

export default Private;
