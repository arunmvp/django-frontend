import React from "react";
import { CakeSlice, ChefHat, CookingPot } from "lucide-react"; // example icons

const Features = () => {
  const items = [
    {
      icon: <CakeSlice size={40} className="text-white" />,
      bg: "bg-[#6b3e32]", // brown
      title: "Products",
      desc: "Lorem ipsum dolor sit amet consectetuer aliquet.",
    },
    {
      icon: <ChefHat size={40} className="text-white" />,
      bg: "bg-[#e37177]", // pink
      title: "Cake Class",
      desc: "Lorem ipsum dolor sit amet consectetuer aliquet.",
    },
    {
      icon: <CookingPot size={40} className="text-white" />,
      bg: "bg-[#4ab8a1]", // teal green
      title: "Recipes",
      desc: "Lorem ipsum dolor sit amet consectetuer aliquet.",
    },
  ];

  return (
    <section className="bg-[#f2ebe1] py-12 px-6 flex justify-center">
      <div className="bg-white  rounded-xl shadow-lg p-10 flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-center w-[90%] max-w-6xl">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 w-full md:w-1/3">
            {/* Cupcake-like circle */}
            <div
              className={`min-w-[80px] h-20 rounded-full flex items-center justify-center ${item.bg} transition-transform duration-300 ease-in-out hover:scale-125`}
            >
              {item.icon}
            </div>

            {/* Text next to icon */}
            <div>
              <h3 className="text-xl font-script text-gray-800">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 
