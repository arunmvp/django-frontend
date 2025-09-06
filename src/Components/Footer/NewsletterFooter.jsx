import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

const NewsletterFooter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [read , setRead] = useState(false) 

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      // 🔹 API call backend ku (example endpoint)
      await axios.post("http://127.0.0.1:8000/api/subscribe/", { email });
      setMessage("Subscribed!");
    //   setEmail("");
        setRead(true)
    } catch (error) {
      setMessage("try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f4ede3] py-8 px-6 flex flex-col md:flex-row  items-center justify-around gap-3 ">
      {/* Left - Newsletter Text */}
      <div className="flex items-center gap-3">
        <div className="bg-[#e47277] text-white p-3 rounded-full">
          <MdEmail size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            GET OUR NEWSLETTER
          </h3>
          <p className="text-sm text-gray-500">
            Sign up with your email to get fresh updates.
          </p>
        </div>
      </div>

      {/* Middle - Input box */}
      <div className="flex w-full md:w-1/3">
       {read ?  <input
          type="email"
          value={email}          
          readOnly
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#e47277]"
        /> :  <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#e47277]"
        />}
        <button
          disabled={loading}
          onClick={handleSubscribe}
          className="bg-[#e47277] px-12 py-2 text-white rounded-r-md hover:bg-[#d95c63] transition disabled:opacity-50"
        >
          
      {message ? (
        <p className="font-medium text-white md:mt-0">{message}</p>
      ) : <MdEmail size={20} />} 
        </button>
      </div>

      {/* Right - Social Media */}
      <div className="flex gap-3">
        <a
          href="/"
          className="bg-[#3b5998] p-3 rounded-full text-white hover:opacity-80"
        >
          <FaFacebookF />
        </a>
        <a
          href="/"
          className="bg-[#1da1f2] p-3 rounded-full text-white hover:opacity-80"
        >
          <FaTwitter />
        </a>
        <a
          href="/"
          className="bg-[#bd081c] p-3 rounded-full text-white hover:opacity-80"
        >
          <FaPinterestP />
        </a>
        <a
          href="/"
          className="bg-[#dd4b39] p-3 rounded-full text-white hover:opacity-80"
        >
          <FaGooglePlusG />
        </a>
        <a
          href="/"
          className="bg-[#ff0000] p-3 rounded-full text-white hover:opacity-80"
        >
          <FaYoutube />
        </a>
      </div>

      
    </div>
  );
};

export default NewsletterFooter;
