import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis.
          </p>
          <p>
            <span className="font-semibold">Phone: </span>
            <a
              href="tel:+00123456789"
              className="hover:text-[#e47277] transition-colors duration-300"
            >
              +00 123 456 789
            </a>
          </p>
          <p>
            <span className="font-semibold">E-mail: </span>
            <a
              href="mailto:hello@cakeart.com"
              className="hover:text-[#e47277] transition-colors duration-300"
            >
              hello@cakeart.com
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            329 Queensberry Street, North Melbourne VIC 3051, Australia.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#e47277] transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#e47277] transition-colors duration-300">Blog</Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-[#e47277] transition-colors duration-300">Recipes</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#e47277] transition-colors duration-300">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#e47277] transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#e47277] transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/shipment" className="hover:text-[#e47277] transition-colors duration-300">Shipment</Link>
            </li>
            <li>
              <Link to="/chef-talks" className="hover:text-[#e47277] transition-colors duration-300">Chef Talks</Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-[#e47277] transition-colors duration-300">Live Support</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#e47277] transition-colors duration-300">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-200 mt-8 pt-4">
        <p>
          NEM | Restaurant WordPress Theme © Powered by{" "}
          <a
            href="https://thimpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e47277] transition-colors duration-300"
          >
            ThimPress
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
