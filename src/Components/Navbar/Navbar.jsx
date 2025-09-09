import React, { useEffect, useState, useContext } from "react";
import {
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Redux/CartSlice"; // 🛒 Redux slice
import { AuthContext } from "../../Context/AuthContext";
import CartDrawer from "../CartDrawer/CartDrawer"; // 🛒 Drawer
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  const { items } = useSelector((state) => state.cart);

  // 🛒 Fetch cart items on load
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCart());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "");
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    setUserMenu(false);
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  // active link check
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const menuItems = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="bg-white text-black shadow-md px-6 py-4 flex justify-between items-center sticky top-0 w-full z-50">
      {/* Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      > 
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium items-center">
        {menuItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          
          return (
            <li
              key={item}
              className={`cursor-pointer transition-colors duration-300 hover:text-[#E47277] ${ 
                isActive(path) ? "text-[#E47277]" : ""
              }`}
              onClick={() => navigate(path)}
            >
              {item}
            </li>
          );
        })}

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative ml-4">
          <input
            type="text"
            placeholder="Search products..."
            className="peer w-64 md:w-80 py-2 pl-4 pr-12 rounded-full font-light border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#E47277] transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#E47277] hover:bg-[#d95c63] text-white p-2 rounded-full transition-colors"
          >
            <FaSearch />
          </button>
        </form>
      </ul>

      {/* Right side icons */}
      <div className="flex gap-5 items-center relative">
        {/* Cart Icon with count */}
        <div
          className="relative cursor-pointer right-7"
          onClick={() => setIsCartOpen(true)}
        >
          <FaShoppingCart className="text-xl hover:text-[#E47277] transition-colors" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#E47277] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {items.length}
            </span>
          )}
        </div>

        {/* User Icon */}
        <div className="relative bottom-2">
          <FaUserCircle
            onClick={() => setUserMenu(!userMenu)}
            className="text-2xl cursor-pointer hover:text-[#E47277] transition-colors"
          />
          {isLoggedIn && username && (
            <p className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
              {username}
            </p>
          )}
          {userMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black border border-gray-200 rounded shadow-lg flex flex-col z-50">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-[#E47277] hover:text-white text-left transition-colors"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setUserMenu(false);
                    }}
                    className="px-4 py-2 hover:bg-[#E47277] hover:text-white text-left transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/signup");
                      setUserMenu(false);
                    }}
                    className="px-4 py-2 hover:bg-[#E47277] hover:text-white text-left transition-colors"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Hamburger for mobile */}
        <div
          className="md:hidden text-2xl cursor-pointer hover:text-[#E47277] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 text-lg font-medium md:hidden border-t border-gray-200">
          {menuItems.map((item) => (
            <p
              key={item}
              className={`cursor-pointer hover:text-[#E47277] transition-colors ${
                isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "text-[#E47277]"
                  : ""
              }`}
              onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
            >
              {item}
            </p>
          ))}

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="w-3/4 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E47277] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#E47277] hover:bg-[#d95c63] text-white p-2 rounded-full transition-colors"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      )}

      {/* 🛒 Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={items}
      />
    </nav>
  );
};

export default Navbar;
