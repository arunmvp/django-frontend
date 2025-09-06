import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adding product id:", product.id, product.title); 
    dispatch(addToCart({ product_id: product.id, quantity: 1 })); 
  }; 

  return (
    <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition bg-white text-center max-w-xs mx-auto">
      {/* Image */}
      <div className="relative h-41">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base font-medium text-gray-800 hover:text-[#E47277] transition-colors">
        {product.title}
      </h3>

      {/* Price */}
      <p className="mt-1 text-gray-700 font-semibold text-sm">
        ${product.price}
      </p>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        className="mt-3 mb-4 w-32 py-1.5 border border-[#E47277] text-[#E47277] text-sm font-semibold rounded-md transition-colors hover:bg-[#E47277] hover:text-white"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
