import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const create = async (data) => {
    setError("")
    try {
        const session = await authService.createAccount(data)
        if (session) {
            const userData = await authService.getCurrentUser()
            if (userData) {
                dispatch(login({
                    userData:{
                        $id: userData.$id,
                        name: userData.name,
                        email: userData.email
                    }
                }))
                navigate('/')
            }
        }
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <div className="h-1/2 mt-14 mb-17 flex text-white">

      <div className="bg-white/10 p-8 rounded-xl w-[350px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(create)}>

          <input
            type="text"
            placeholder="Enter your Full Name"
            {...register("name",{required: true})}            
            className="w-full p-3 mb-4 rounded bg-black/40 border border-white/20 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
             {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Enter valid email",
              },
            })}
            className="w-full p-3 mb-4 rounded bg-black/40 border border-white/20 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password",{required: true})}
            className="w-full p-3 mb-4 rounded bg-black/40 border border-white/20 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-300 transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center mt-6 text-gray-300">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-yellow-400 hover:underline"
          >
            Sign in
          </button>
        </p>

      </div>
    </div>
  );
};

export default Signup;