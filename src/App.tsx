import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Login} path="/login" />
    </Routes>
  );
}

export default App;
