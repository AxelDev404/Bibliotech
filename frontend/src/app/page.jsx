'use client';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { LogInAPI } from "@/features/Authentication/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const HandleChange = (e) => {
    
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

  };

  const HandleLogIn = async (e) => {
    
    e.preventDefault();
    
    try {
      
      await dispatch(LogInAPI(formData)).unwrap();
      toast.success("Benvenuto!");
      router.replace("/dashboard");

    } catch {
      toast.error("Accesso negato");
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
     
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="w-full max-w-md bg-black border-white  border rounded-3xl shadow-md p-10 flex flex-col items-center transition-all duration-300 hover:shadow-lg">
     
        <h1 className="text-3xl font-extralight mb-8 text-white tracking-tight">
          Benvenuto in <span className="font-extralight">BiblioTech</span>
        </h1>

        <form onSubmit={HandleLogIn} className="flex flex-col w-full gap-5">
          
          <div className="flex flex-col">
          
            <label className="text-sm text-black mb-2 font-light">
              Username
            </label>
          
            <input  name="username"  value={formData.username} onChange={HandleChange}  type="text"placeholder="Inserisci username" className="p-3 w-full rounded-xl bg-white text-black placeholder-slate-500 border border-rose-200 focus:outline-none focus:ring-1 focus:ring-white focus:bg-white transition-all duration-200" />
         
          </div>

          <div className="flex flex-col">

            <label className="text-sm text-black mb-2 font-light">
              Password
            </label>
            
            <input name="password" value={formData.password} onChange={HandleChange}  type="password" placeholder="Inserisci password" className="p-3 w-full rounded-xl bg-white text-black placeholder-slate-500 border border-rose-200 focus:outline-none focus:ring-1 focus:ring-white focus:bg-white transition-all duration-200"/>

          </div>

          <button  type="submit"  className="mt-5 py-3 w-full bg-white text-black font-medium rounded-xl hover:bg-slate-600 active:scale-[0.98] transition-all duration-200 shadow-sm">
            Accedi
          </button>
        
        </form>

      </div>
    </div>
  );
}
