import { Routes, Route } from "react-router-dom";
import { AuthRequired } from "./components/authentication/index";
import Layout from "./components/layout/index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Private from "./pages/Private";
import Unauthorized from "./pages/Unauthorized";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>
        <Route element={<AuthRequired />}>
          <Route path="/private" element={<Private />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
