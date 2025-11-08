"use client";
import { useState } from "react";

export default function CouponBox({ onApplyCoupon }) {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");

  const handleApply = () => {
    if (!coupon.trim()) {
      setMessage("Please enter a coupon code.");
      return;
    }

    onApplyCoupon(coupon.trim());
    setMessage("Coupon applied successfully!");
  };

  return (
    <div className="border p-4 rounded-lg mt-4 bg-gray-50">
      <label className="font-semibold text-sm">Have a coupon?</label>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="flex-1 p-2 border rounded-md outline-none"
        />
        <button
          onClick={handleApply}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Apply
        </button>
      </div>
      {message && <p className="text-xs text-green-600 mt-2">{message}</p>}
    </div>
  );
}
