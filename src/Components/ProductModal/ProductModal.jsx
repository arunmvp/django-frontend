import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LoadingButton } from "@mui/lab"; // ✅ import LoadingButton

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full cursor-pointer hover:bg-gray-100 z-10"
    onClick={onClick}
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full cursor-pointer hover:bg-gray-100 z-10"
    onClick={onClick}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </div>
);

const ProductModal = ({ open, handleClose, product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false); // ✅ loading state

  if (!product) return null;

  const handleAddToCart = () => {
    setLoading(true); // show spinner
    setTimeout(() => {
      dispatch(addToCart({ product_id: product.id, quantity }));
      setLoading(false); // hide spinner
      handleClose();
    }, 1200); // fake delay for UX
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{ style: { borderRadius: "7px", overflow: "hidden" } }}
      BackdropProps={{
        style: {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <DialogContent sx={{ p: { xs: 2, md: 4 }, position: "relative" }}>
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Slider */}
          <div className="w-full md:w-1/2 relative">
            <Slider {...settings}>
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[280px] md:h-[380px] object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={product.image2 || product.image}
                  alt={product.title}
                  className="w-full h-[280px] md:h-[380px] object-cover rounded-lg"
                />
              </div>
            </Slider>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Typography variant="h5" fontWeight="bold" color="error">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
              Category: {product.category || "General"}
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ my: 1 }}>
              ${product.price}
            </Typography>

            {/* Quantity */}
            <div className="flex items-center gap-3 my-3">
              <Button
                variant="outlined"
                size="small"
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
              >
                -
              </Button>
              <span className="px-4 py-1 border rounded-md">{quantity}</span>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </Button>
            </div>

            {/* ✅ Loading Add to Cart */}
            <LoadingButton
              variant="contained"
              color="error"
              loading={loading}
              sx={{ mt: 2, width: "fit-content", fontWeight: "bold" }}
              onClick={handleAddToCart}
            >
              {loading ? "ADDING..." : "ADD TO CART"}
            </LoadingButton>

            {/* Description */}
            <Typography variant="body2" sx={{ mt: 3 }} color="text.secondary">
              {product.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis."}
            </Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
