import React from 'react';
import { Sparkles, LayoutGrid, Hand, Target } from 'lucide-react';

const About = () => {

    // Feature Card component for process steps
    const ProcessCard = ({ icon, title, description, delay }) => (
        <div 
            className={`p-8 bg-white rounded-2xl shadow-xl border-t-4 border-teal-500 transition-all duration-700 ease-out transform hover:scale-[1.03]`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-teal-100 rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            <main>
                {/* --- Hero Section: About Us --- */}
                <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 py-24 text-white overflow-hidden">
                    <div className="container mx-auto px-6 text-center z-10 relative">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                            Our Story, Handcrafted
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-200 max-w-3xl mx-auto">
                            Transforming simple epoxy resin into captivating, functional art pieces for your home and lifestyle.
                        </p>
                    </div>
                </section>

                {/* --- Mission & Vision --- */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-l-4 border-yellow-400 pl-4">
                                The Genesis of Epoxy + Dreams
                            </h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                Epoxy + Dreams began in a small home studio with a passion for fluidity and color. Frustrated by mass-produced decor, our founder, Alex, sought to create unique, high-quality pieces that carry the warmth and individuality of handmade art. Every piece tells a unique story of movement, light, and inspiration.
                            </p>
                            <div className="flex items-start space-x-4 mt-8">
                                <Target className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
                                    <p className="text-gray-500">
                                        To deliver breathtaking, durable resin creations that elevate everyday spaces and inspire joy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="order-1 lg:order-2">
                            <img
                                src="https://placehold.co/600x400/c7d2fe/3730a3?text=Studio+Artisan+At+Work"
                                alt="Studio Artisan pouring resin"
                                className="rounded-tl-[60px] rounded-br-[60px] rounded-b-xl rounded-t-xl shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* --- Our Process (Steps) --- */}
                <section className="bg-teal-50 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-extrabold text-center text-teal-800 mb-16">
                            The Handcrafted Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            <ProcessCard 
                                icon={<Sparkles className="w-6 h-6 text-teal-600" />}
                                title="1. Conceptual Design"
                                description="We begin with nature's forms, studying geodes, ocean waves, and celestial bodies to define the initial flow and color palette."
                                delay={0}
                            />
                            <ProcessCard 
                                icon={<LayoutGrid className="w-6 h-6 text-teal-600" />}
                                title="2. Pigment & Pour"
                                description="High-quality, UV-resistant epoxy is carefully mixed with metallic powders and vibrant pigments, then hand-poured in layers."
                                delay={200}
                            />
                            <ProcessCard 
                                icon={<Hand className="w-6 h-6 text-teal-600" />}
                                title="3. Curing & Finishing"
                                description="Each piece cures for 72+ hours, followed by meticulous sanding, polishing, and a final food-safe coat application."
                                delay={400}
                            />
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    );
};

export default About;