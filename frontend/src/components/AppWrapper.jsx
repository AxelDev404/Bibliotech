'use client';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckUserAPI } from "@/features/Authentication/authSlice";
import { useRouter } from "next/navigation";

export default function AppWrapper({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    
    const fetchUser = async () => {
    
      const resultAction = await dispatch(CheckUserAPI());
    
      if (CheckUserAPI.fulfilled.match(resultAction)) setReady(true);
      if (!resultAction.payload?.loggedIn) router.replace("/");
    
    };
    
    fetchUser();

  }, [dispatch, router]);

  if (!ready) return <div className="flex justify-center items-center min-h-screen bg-rose-900"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-700"></div></div>;

  return children;
}
