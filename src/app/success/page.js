"use client"

import React, { useState, useEffect } from 'react';
import { CheckCircle, ShoppingBag, Home, FileText } from 'lucide-react';
import Link from 'next/link';
import { useCartContext } from '@/context/CartContext';

const PaymentSuccessPage = () => {
  // Dummy Data for the Confirmed Order
  const orderDetails = {
    orderId: 'RD-1892024-A7B3',
    totalAmount: 165.50,
    email: 'customer@example.com',
    estimatedDelivery: '5-7 business days',
  };

  const { clearCart } = useCartContext();
  // A subtle animation to make the card pop on load
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Clear Cart State
    clearCart();

    // Clear Local Storage
    localStorage.removeItem("cart");
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Success Card */}
      <div
        className={`w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-12 text-center transition-all duration-700 ease-out 
                    ${isLoaded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative p-3 rounded-full bg-green-100">
            <CheckCircle className="w-16 h-16 text-green-600 animate-pulse-once" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2">
          Order Confirmed!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your beautiful new resin art is on its way.
        </p>

        {/* Summary Box */}
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Order Summary
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between items-center border-b pb-2 border-teal-200">
              <span className="font-medium flex items-center">
                <FileText className="w-5 h-5 mr-2 text-teal-600" />
                Order ID:
              </span>
              <span className="font-bold text-gray-900">{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2 border-teal-200">
              <span className="font-medium">Total Paid:</span>
              <span className="text-3xl font-extrabold text-green-700">${orderDetails.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Confirmation Sent To:</span>
              <span className="text-sm text-gray-900 break-words">{orderDetails.email}</span>
            </div>
            <div className="text-sm text-center pt-2 text-teal-700">
              <p className="font-semibold">Estimated Delivery: {orderDetails.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

          {/* Primary Action: Continue Shopping */}
          <Link href={'/shop'}><button className="flex-1 w-full flex items-center justify-center py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-[1.01]">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Continue Shopping
          </button></Link>

          {/* Secondary Action: Home or Order History */}
          <Link href={'/'}><button className="flex-1 w-full flex items-center justify-center py-3 px-6 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition duration-300">
            <Home className="w-5 h-5 mr-2" />
            Back to Homepage
          </button></Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          A detailed receipt has been sent to your email.
        </p>
      </div>
      {/* Custom CSS for a slight, elegant glow/pulse effect on the icon */}
      <style jsx="true">
        {`
                @keyframes pulse-once {
                    0% {
                        transform: scale(0.9);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-pulse-once {
                    animation: pulse-once 1.5s ease-out 1;
                }
                `}
      </style>
    </div>
  );
};

export default PaymentSuccessPage;