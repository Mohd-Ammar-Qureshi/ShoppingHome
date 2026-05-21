import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import authService from "../appwrite/auth";
import UserPage from "./UserPage";

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };

    getUser();
  }, []);

  return (
    <>
      {!user ? (
        <>
          <h1 className="text-6xl md:text-7xl text-white font-light">
            New Season.
          </h1>

          <p className="text-yellow-400 tracking-[6px] uppercase mt-4">
            Luxury Fashion Collection
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">

            <button
              onClick={() => navigate("/login")}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Shop Now
            </button>

            <button className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition">
              Explore
            </button>

          </div>

          <div className="h-[900px]" />
        </>
      ) : (
        <UserPage />
      )}
    </>
  );
};

export default Home;