import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./Sidebar";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    setIsLoading(false);
  }, []);

  // If user is not logged in, redirect to login page
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!isLoggedIn) {
    history("/signin");
    return null;
  } else if (isLoggedIn) {
    <Navigate to="/dashboard"></Navigate>;
  }

  // If user is logged in, render the Dashboard component
  return (
    <>
      <SideBar />
      <div className=" overflow-hidden flex h-screen">
        <div className=" m-auto max-w-md rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
          <a className="block rounded-xl bg-slate-700 p-4 sm:p-6 lg:p-8" href>
            <div className="mt-16">
              <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                Hi, Admin
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Use sidebar for functions
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
