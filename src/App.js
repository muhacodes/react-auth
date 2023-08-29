import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, redirect  } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";


function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Check if user information exists in localStorage
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
    }

    console.log(storedUserInfo);
  }, []);

  const handleLogout = () => {
    // Clear user information from localStorage and state
    localStorage.removeItem("userInfo");
    setUserInfo(null);
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
        <Routes>
            {/* Conditionally render the Profile route */}
            {userInfo ? (
              <Route path="/" element={<Profile onLogout={handleLogout} userProfile={userInfo.user} />} />
            ) : (
              // Redirect to login when user information is not available
              <Route path="/" element={<LoginPage />} />
            )}
            
            {!userInfo && <Route path="/signup" element={<SignupPage />} />}
            {!userInfo && <Route path="/login" element={<LoginPage />} />}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
