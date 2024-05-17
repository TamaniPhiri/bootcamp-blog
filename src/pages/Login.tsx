import { Link } from "react-router-dom";

const Login = () => {
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
          />
          <input
            type="email"
            className="border-2 p-2 rounded-lg"
            placeholder="Password"
          />
        </div>
        <button className="bg-lime-500 p-2 rounded-lg my-2">Sign in</button>
        <Link to={"/register"}>
          <span className=" text-gray-600">Don't have an account?</span>{" "}
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
