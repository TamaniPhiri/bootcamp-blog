import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPost from "./pages/NewPost";
import MyPosts from "./pages/MyPosts";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Login} path="/login" />
      <Route Component={Register} path="/register" />
      <Route Component={NewPost} path="/new-post" />
      <Route Component={MyPosts} path="/my-posts" />
    </Routes>
  );
}

export default App;
