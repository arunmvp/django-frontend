import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="h-[550px] bg-fixed bg-cover bg-[#f4ede3] flex items-center justify-center text-white"
      style={{ backgroundImage: "url(https://cakeart.thimpress.com/wp-content/uploads/2015/01/slider333.jpg)" }}
    >
      {/* Overlay */}
      <div className="bg-black/50 p-8 rounded-2xl text-center max-w-2xl">
        {/* Top Ribbon */}
        <div className=" text-white px-6 py-2 inline-block rounded-md font-semibold mb-6">
          CLASS OPENING
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-medium mb-6 font-script">
          Baking fun with John Doe
        </h1>

        {/* Timings */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            <span className="text-lg">09:00 AM Saturday</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            <span className="text-lg">04:00 PM Monday</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-[#E47277] px-8 py-2 rounded-lg text-lg font-semibold hover:bg-[#c75a5e] transition">
          JOIN NOW
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
