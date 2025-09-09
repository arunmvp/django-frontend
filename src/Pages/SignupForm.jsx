import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const SignupForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false); // button loading
  const [error, setError] = useState(""); // username error

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError(""); // user typing na error clear aagum
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 
    try {
      const res = await axios.post(
        "https://django-ecommerce-95xj.onrender.com/api/register/",
        data
      );

      // success → local storage save
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", data.username);
      setIsLoggedIn(true);

      // move to home
      navigate("/");
    } catch (err) {
      console.log(err.response?.data || err.message);

      // username already exists error check
      if (err.response?.data?.username) {
        setError(err.response.data.username[0]); // Django normally returns {username: ["This username is already taken."]}
      } else {
        alert("Signup failed!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-80 py-14 bg-[#F4EDE3] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#e47277] mb-6 text-center">
          Sign up
        </h2>

        {/* Form */}
        <form onSubmit={handlesubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={handlechange}
              required
              placeholder="Enter your username"
              pattern="^[a-zA-Z0-9.@+-_]+$"
              title="Only letters, numbers and @/./+/-/_ allowed"
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                error ? "border-red-500" : ""
              }`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handlechange}
              placeholder="your@email.com"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              required
              onChange={handlechange}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Button with loading */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#e47277] to-[#db898d] text-white py-2 rounded-lg shadow-md hover:from-[#f29ca0] hover:to-[#e47277] transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Signing up...
              </>
            ) : (
              <>
                <ShoppingCartIcon fontSize="small" />
                Sign up
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#e47277] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
