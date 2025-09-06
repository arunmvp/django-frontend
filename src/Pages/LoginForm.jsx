import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { setIsLoggedIn } = useContext(AuthContext);

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login/", data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", data.username);
      setIsLoggedIn(true); // <-- update Navbar instantly
      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-max py-14 bg-[#F4EDE3] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#e47277] mb-6 text-center">
          Log in
        </h2>

        {/* Form */}
        <form onSubmit={handlesubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              onChange={handlechange}
              placeholder="your username"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={handlechange}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#e47277] to-[#ea888d] text-white py-2 rounded-lg shadow-md hover:from-[#f99a9f] hover:to-[#e47277] transition"
          >
            Log in
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#e47277] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
