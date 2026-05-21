import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(
            authLogin({
              userData: {
                $id: userData.$id,
                name: userData.name,
                email: userData.email,
              },
            })
          );

          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
       <div className="h-1/2 mt-14 mb-17 flex text-white">
      <div className="bg-white/10 p-8 rounded-xl w-[350px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Sign In
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(login)}>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded bg-black/40 border border-white/20 outline-none"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Enter valid email",
              },
            })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded bg-black/40 border border-white/20 outline-none"
            {...register("password", {
              required: "Password is required",
            })}
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-300 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-300">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-yellow-400 hover:underline"
          >
            Sign Up
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;