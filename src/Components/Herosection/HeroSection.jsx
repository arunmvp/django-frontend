import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or replace with Heroicons if you want
import picture1 from "../../Assets/cake1.png";
import picture2 from "../../Assets/cake2.png";
import picture3 from "../../Assets/cake3.png";

const images = [picture1, picture2, picture3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 overflow-hidden"
      style={{ backgroundColor: "#f2ebe1" }}
    >
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left z-10">
        <h1 className="text-3xl md:text-5xl font-script leading-tight text-[#d9534f]">
          Celebration Cakes
        </h1>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-6 px-6 py-3 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white rounded-lg shadow transition">
          See the Recipe
        </button>
      </div>

      {/* Right Image Slideshow */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center relative">
        <img
          src={images[current]}
          alt="Hero Slide"
          className="rounded-xl shadow-lg w-full max-w-lg h-[400px] object-cover"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
