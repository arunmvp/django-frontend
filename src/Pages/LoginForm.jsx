import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // <-- loading state
  const [error, setError] = useState(""); // <-- error message

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError(""); // clear error on typing
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://django-ecommerce-95xj.onrender.com/api/login/",
        data
      );

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", data.username);

      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log(err.response?.data || err.message);

      // check Django error
      if (err.response?.data?.detail) {
        setError(err.response.data.detail); // example: "No active account found with the given credentials"
      } else {
        setError("Login failed! Please try again.");
      }
    } finally {
      setLoading(false);
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
          {/* Username */}
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
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                error ? "border-red-500" : ""
              }`}
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
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                error ? "border-red-500" : ""
              }`}
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

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

          {/* Button with loading */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#e47277] to-[#ea888d] text-white py-2 rounded-lg shadow-md hover:from-[#f99a9f] hover:to-[#e47277] transition flex items-center justify-center gap-2"
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
                Logging in...
              </>
            ) : (
              <>
                <ShoppingCartIcon fontSize="small" />
                Log in
              </>
            )}
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
