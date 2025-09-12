import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../Redux/CartSlice";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const dispatch = useDispatch();
  const [loadingItems, setLoadingItems] = useState([]); // track remove loading

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 🛒 Total Calculation
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // 🔄 Remove Loading
  const triggerRemoveLoading = (id, action) => {
    if (loadingItems.includes(id)) return;

    setLoadingItems((prev) => [...prev, id]);
    setTimeout(() => {
      action(); // perform redux action AFTER 1s
      setLoadingItems((prev) => prev.filter((itemId) => itemId !== id));
    }, 1000);
  };

  // ➕ Increment (NO loading)
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  // ➖ Decrement (NO loading)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  // ❌ Remove (with loading)
  const handleRemove = (id) => {
    triggerRemoveLoading(id, () => dispatch(removeFromCart(id)));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <FaTimes
                className="cursor-pointer text-gray-600 hover:text-red-500"
                onClick={onClose}
              />
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  const isLoading = loadingItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      className="relative flex items-center justify-between mb-4 border-b pb-2"
                    >
                      {/* Remove Loading Overlay */}
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
                          <div className="w-6 h-6 border-2 border-[#E47277] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}

                      {/* Product Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-14 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="text-sm w-[160px] font-medium mb-2">
                            {item.product.title}
                          </h4>
                          <div className="flex items-center gap-0 border w-[85px] rounded">
                            <button
                              onClick={() => handleDecrement(item)}
                              className="px-2 py-0 border-r"
                            >
                              -
                            </button>
                            <span className="px-3 font-light">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrement(item)}
                              className="px-2 py-0 border-l"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal + Remove */}
                      <div className="flex flex-col items-end">
                        <p className="text-sm mt-1 font-thin">
                          Subtotal:{" "}
                          <span className="font-normal">
                            ${item.product.price * item.quantity}.00
                          </span>
                        </p>
                        <button
                          onClick={() => handleRemove(item.id)}
                          disabled={isLoading}
                          className="flex items-center gap-1 text-red-500 text-xs mt-2 hover:underline"
                        >
                          <FaTrash /> Remove
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500 text-center mt-10">
                  Your cart is empty 🛒
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg text-[#E47277]">
                  ₹{total}.00
                </span>
              </div>
              <button
                className="w-full bg-[#E47277] hover:bg-[#d95c63] text-white py-2 rounded-lg transition-colors"
                onClick={() => alert("Proceeding to Checkout 🚀")}
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
