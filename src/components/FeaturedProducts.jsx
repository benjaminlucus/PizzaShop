import React from 'react'
import ProductSingleCard from './ProductSingleCard'
import getDataFromSanity from '@/lib/getDataFromSanity';

const FeaturedProducts = async () => {

      const { productsData } = await getDataFromSanity();

    return (
        <div>
            <section id="products" className="container mx-auto px-6 py-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
                    Featured Creations
                </h2>
                <p className="text-center text-lg text-gray-500 mb-12">
                    Hand-poured, unique, and ready to decorate your world.
                </p>

                {/* Product Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {productsData.map((product) => (
                        <ProductSingleCard key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FeaturedProducts