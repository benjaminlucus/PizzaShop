"use client";
import { X } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import CouponBox from "./CouponBox";
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Link from "next/link";


const Cart = () => {
  const { cartItems, totalPrice, totalQuantity, setShowCart, removeItem, toggleProductQuantity } =
    useCartContext();

  const [discount, setDiscount] = useState(0)
  const [code, setCode] = useState('')
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({
      items: cartItems,
      quantity: totalQuantity,
      price: totalPrice,
    }));
  }, [cartItems, totalQuantity, totalPrice]);


  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems, code }),
    });

    const data = await res.json();
    toast.loading('Redirecting ...')
    window.location.href = data.url;
  };

  const handleApplyCoupon = (code) => {
    // Example Logic (You can replace it with API check)
setCode(code)
    if (code === "SALE10") {
      setDiscount(10); // 10% off
    }
    else if (code === "SALE20") {
      setDiscount(20); // 20% off
    }
    else {
      setDiscount(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end">
      <div className="w-full sm:w-[380px] md:w-[420px] bg-white h-full shadow-2xl p-6 flex flex-col animate-slide-left relative ml-10">
        <ToastContainer position="top-center" />
        {/* CLOSE CART */}
        <button
          className="absolute right-4 top-4 text-gray-600 hover:text-black"
          onClick={() => setShowCart(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Your Cart ({totalQuantity} items)</h2>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto space-y-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 border-b pb-4">

                <img
                  src={item.images[0].url}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} each
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => toggleProductQuantity(item._id, 'dec')}
                      className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => toggleProductQuantity(item._id, 'inc')}
                      className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-teal-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-sm text-red-500 hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <>

              <p className="text-center italics text-gray-500 mt-20">Your cart is empty</p>
              <Link href="/shop"><button className="w-full mt-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition">
                Shop Now
              </button></Link>
            </>
          )}
        </div>
        <div>
          <CouponBox onApplyCoupon={handleApplyCoupon} />

          <p className="mt-4 text-sm">
            Discount Applied: <b>{discount}%</b>
          </p>
        </div>

        {/* SUMMARY */}
        <div className="pt-4 border-t mt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button onClick={() => handleCheckout()} className="w-full mt-4 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
