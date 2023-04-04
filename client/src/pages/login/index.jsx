import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/authentication/index";
import LoginForm from "./LoginForm";

const Login = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleOnLogin = useCallback(
    (e) => {
      e.preventDefault();
      setUser({ username });
      navigate("/private");
    },
    [setUser, username]
  );

  return (
    <div className="Login">
      <h1>Login</h1>
      <LoginForm
        username={username}
        setUsername={setUsername}
        handleOnLogin={handleOnLogin}
      />
    </div>
  );
};

export default Login;
