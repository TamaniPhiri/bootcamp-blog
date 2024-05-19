import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Login} path="/login" />
      <Route Component={Register} path="/register" />
    </Routes>
  );
}

export default App;
