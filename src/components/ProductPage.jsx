"use client";

import React, { useState } from 'react';
import { ShoppingCart, Zap, Minus, Plus, Star, Box, RefreshCw } from 'lucide-react';
import { useCartContext } from '@/context/CartContext';

const productData = {
  details: [
    { title: "Description", icon: <Box className="w-5 h-5 mr-2" />, content: "Dimensions: 14 inches diameter. Materials: Food-safe epoxy resin, natural pigments, crushed mirror glass, and quartz. Care: Wipe clean with a damp cloth. Not dishwasher safe. Each piece is unique and may have slight variations." },
    { title: "Shipping & Returns", icon: <RefreshCw className="w-5 h-5 mr-2" />, content: "Shipping takes 5-7 business days within the US. We offer free returns within 30 days if the item is unused and in its original packaging. Custom orders are final sale. See our FAQ for international rates." },
    { title: "Reviews (145)", icon: <Star className="w-5 h-5 mr-2" />, content: "Customer reviews are consistently positive, praising the vibrant colors and sturdy construction. Many note that it's even more beautiful in person. Average rating is 4.8 out of 5 stars based on 145 verified purchases." }
  ]
};

const ProductPage = ({ product }) => {

  const { decreaseQty, increaseQty,addToCart, qty } = useCartContext();
  const [selectedImageId, setSelectedImageId] = useState(0);
  const [activeTab, setActiveTab] = useState(productData.details[0].title);

  const selectedImage = product.images[selectedImageId];
  const activeDetail = productData.details.find(detail => detail.title === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-8">

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

          {/* LEFT: Image Gallery */}
          <div>

            {/* Main Image */}
            <div className="w-full h-[260px] sm:h-[350px] md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden shadow-md mb-3">
              <img
                src={selectedImage.url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageId(index)}
                  className={`min-w-[70px] min-h-[70px] sm:min-w-[90px] sm:min-h-[90px] rounded-xl overflow-hidden border-2 transition
                    ${selectedImageId === index ? "border-teal-600" : "border-transparent"}`}
                >
                  <img
                    src={img.url}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: Product Details */}
          <div>
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-sm sm:text-lg text-gray-500 mb-4">{product.tagline}</p>

            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <p className="text-3xl sm:text-4xl font-black text-teal-600">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center space-x-3 mb-6">
              <label className="text-gray-700 font-semibold">Qty:</label>
              <div className="flex items-center border rounded-xl overflow-hidden">
                <button onClick={() => decreaseQty()} className="px-3 py-2 text-gray-600">-</button>
                <span className="px-4 font-bold text-gray-800">{qty}</span>
                <button onClick={() => increaseQty()} className="px-3 py-2 text-gray-600">+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>addToCart(product, qty)} className="flex items-center justify-center w-full py-3 bg-teal-500 text-white font-bold rounded-xl shadow hover:bg-teal-600 transition">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="flex items-center justify-center w-full py-3 bg-yellow-400 text-teal-800 font-bold rounded-xl shadow hover:bg-yellow-300 transition">
                <Zap className="w-5 h-5 mr-2" />
                Buy Now
              </button>
            </div>

          </div>
        </div>

        {/* --- TABS --- */}
        <div className="mt-12">
          <div className="flex overflow-x-auto border-b gap-4 py-2">
            {productData.details.map((tab) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(tab.title)}
                className={`whitespace-nowrap flex items-center px-3 py-2 text-base font-semibold border-b-4 transition
                  ${activeTab === tab.title ? "text-teal-600 border-teal-600" : "text-gray-400 border-transparent"}`}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>

          <div className="p-4 bg-gray-50 rounded-xl mt-4 text-gray-700 leading-relaxed shadow-inner">
            <p>{activeDetail.content}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
