import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userDetailsState } from "../atoms/atoms";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const [userDetails, setUserDetails] = useRecoilState(userDetailsState);

  const { mutate, isLoading } = useMutation(
    "registerUser",
    async () => {
      const res = await axios.post(
        "https://bootcamp-blog-server.vercel.app/user/login",
        {
          email: email.toLowerCase().trim(),
          password: password,
        }
      );
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
        setUserDetails(data.user);
        navigation("/");
      },
      onError(error) {
        console.log(error);
      },
    }
  );
  return (
    <div className="min-h-screen w-full flex items-center justify-center md:px-12 px-4">
      <div className="border shadow-xl rounded-3xl md:p-12 p-6 flex flex-col gap-2">
        <h1 className="font-bold text-center text-2xl">Login</h1>
        <p className=" text-center">Hey, Enter your details to get signed in</p>
        <div className="flex flex-col gap-4">
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
          onClick={() => mutate()}
          disabled={isLoading}
          className="bg-lime-500 p-2 rounded-lg my-2"
        >
          {isLoading ? "Loading..." : "Sign in"}
        </button>
        <Link to={"/register"}>
          <span className=" text-gray-600">Don't have an account?</span>{" "}
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
