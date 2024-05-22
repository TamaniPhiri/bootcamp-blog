import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading } = useMutation(
    "registerUser",
    async () => {
      const res = await axios.post(
        "https://bootcamp-blog-server.vercel.app/user/signup",
        {
          email: email.toLowerCase().trim(),
          password: password,
          username: username,
        }
      );
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

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
        <button
          disabled={isLoading}
          onClick={() => mutate()}
          className="bg-lime-500 p-2 rounded-lg my-2"
        >
          {isLoading ? "Loading..." : "Sign up"}
        </button>
        <Link to={"/login"}>
          <span className=" text-gray-600">Already have an account?</span> Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
