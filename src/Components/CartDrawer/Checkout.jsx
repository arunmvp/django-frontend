import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {/* Cart Summary */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-600 py-2"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4 text-lg font-bold">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg font-semibold"
                  whileTap={{ scale: 0.95 }}
                >
                  Pay ₹{totalPrice}
                </motion.button>
              </form>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Checkout;
