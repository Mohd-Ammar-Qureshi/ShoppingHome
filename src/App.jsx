import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";

const App = () => {
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(true)
   useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false))
   },[])
  return  !loading ?(
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-950">
      <Header />

      <main className="pt-20 flex flex-col items-center justify-center text-center px-6">
        <Outlet/>
      </main>

      <Footer />
    </div>
  ):(
    <div className="flex justify-center">Loading...</div>
  )
};

export default App;
