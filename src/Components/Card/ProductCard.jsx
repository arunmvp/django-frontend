import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import ProductModal from "../ProductModal/ProductModal"; 

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addToCart({ product_id: product.id, quantity: 1 }));
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition bg-white text-center max-w-xs mx-auto">
        {/* Image */}
        <div className="relative h-41">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title with click */}
        <h3
          className="mt-3 text-base font-medium text-gray-800 hover:text-[#E47277] transition-colors cursor-pointer"
          onClick={() => setOpen(true)}
        >
          {product.title}
        </h3>

        {/* Price */}
        <p className="mt-1 text-gray-700 font-semibold text-sm">
          ${product.price}
        </p>

        {/* Button with loading */}
        <Button
          onClick={handleAddToCart}
          disabled={loading}
          startIcon={<ShoppingCartIcon />}
          variant="outlined"
          sx={{
            mt: 2,
            mb: 2,
            borderColor: "#E47277",
            color: "#E47277",
            "&:hover": {
              bgcolor: "#E47277",
              color: "white",
            },
          }}
        >
          {loading ? "ADDING..." : "ADD TO CART"}
        </Button>
      </div>

      {/* Popup modal */}
      <ProductModal
        open={open}
        handleClose={() => setOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
