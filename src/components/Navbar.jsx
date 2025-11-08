"use client";
import { useState } from "react";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import Cart from "./Cart";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/products' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const { showCart, setShowCart, totalQuantity } = useCartContext();


    return (
            <>
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Business Name */}
                <div className="text-2xl font-extrabold tracking-widest text-teal-700 font-serif">
                    Epoxy + Dreams
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-teal-500 transition duration-300">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition">
                        <User className="w-5 h-5 text-gray-700" />
                    </button>
                    <button onClick={() => setShowCart(!showCart)} className="p-2 rounded-full hover:bg-gray-100 transition relative">
                        <ShoppingCart className="w-5 h-5 text-gray-700" />
                        <span className="absolute top-0 right-0 block h-5 w-5 rounded-full ring-2 ring-white bg-red-500 text-xs text-white flex items-center justify-center p-0.5">
                            {totalQuantity}
                        </span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="flex flex-col space-y-2 p-4 bg-gray-50 border-t">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

        </header>
            {showCart && <Cart/>}
            </>
    );
};

export default Navbar;