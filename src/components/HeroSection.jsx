"use client";

import Link from "next/link";

const HeroSection = ({ banner }) => {
  console.log(banner)
  return (
    <section className="w-full bg-gray-100 py-10 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-14">

        {/* IMAGE BLOCK */}
        <div className="w-full md:w-1/2 flex justify-center">
          {banner?.imageUrl && (
            <img
              src={banner.imageUrl}
              alt={banner?.headline}
              className="w-full max-w-sm md:max-w-full rounded-2xl shadow-lg object-cover"
            />
          )}
        </div>

        {/* TEXT BLOCK */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          
          {banner?.tagline && (
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-2">
              {banner.tagline}
            </p>
          )}

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4">
            {banner?.headline}
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
{banner?.description}
          </p>

          <Link href={`/product/${banner._id}`}><button className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition">
            Shop Now
          </button></Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
