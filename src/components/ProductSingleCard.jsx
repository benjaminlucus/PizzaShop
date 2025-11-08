import { Star } from "lucide-react";
import Link from "next/link";

const ProductSingleCard = ({ product }) => {
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-teal-600 text-sm sm:text-base font-bold">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Rating (Optional: If you haven't added rating, use default 4) */}
        <div className="flex items-center space-x-1 mb-2">
          {renderStars(product.rating || 4)}
          <span className="text-xs text-gray-500 ml-1">
            ({product.rating || 4}.0)
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <Link href={`/product/${product._id}`}>
          <button className="w-full py-2 sm:py-3 text-sm sm:text-base text-white font-medium bg-teal-500 rounded-md hover:bg-teal-600 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSingleCard;
