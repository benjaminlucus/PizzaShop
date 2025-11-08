import getDataFromSanity from "@/lib/getDataFromSanity";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";

export default async function ProductSection() {

  const { bannerData } = await getDataFromSanity();

  return (
    <div className="min-h-screen bg-gray-50 font-sans" id="home">

      <main>

        {/* Hero Section */}
        <HeroSection banner={bannerData[0]} />
        {/* Featured Products Section */}
        <FeaturedProducts />

        {/* Call to Action Banner (Simple) */}
        <section className="bg-teal-700 py-12 mt-16 shadow-xl">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-2">
              Want Something Truly Unique?
            </h3>
            <p className="text-teal-200 mb-6">
              Inquire about custom color palettes and personalized designs today.
            </p>
            <button className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-md">
              Start a Custom Order
            </button>
          </div>
        </section>
      </main>

    </div>
  );
};