import React from "react";

const LoginForm = ({ username, setUsername, handleOnLogin }) => {
  return (
    <form onSubmit={handleOnLogin}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="type username..."
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
