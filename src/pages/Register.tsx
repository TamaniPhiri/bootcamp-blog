import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full flex items-center justify-center md:px-12 px-4">
      <div className="border shadow-xl rounded-3xl md:p-12 p-6 flex flex-col gap-2">
        <h1 className="font-bold text-center text-2xl">Register</h1>
        <p className=" text-center">Hey, Enter your details to get signed up</p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border-2 p-2 rounded-lg"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="border-2 p-2 rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border-2 p-2 rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-lime-500 p-2 rounded-lg my-2">Sign up</button>
        <Link to={"/register"}>
          <span className=" text-gray-600">Already have an account?</span> Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
