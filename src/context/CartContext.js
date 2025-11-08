"use client";
import { createContext, useState, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react"

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            const { items, quantity, price } = JSON.parse(savedCart);
            setCartItems(items);
            setTotalQuantity(quantity);
            setTotalPrice(price);
        }
    }, []);


    const [qty, setQty] = useState(1)
    const increaseQty = () => setQty((prevVal) => prevVal + 1);
    const decreaseQty = () =>
        setQty((prevVal) => {
            if (prevVal - 1 < 1) return 0;
            return prevVal - 1;
        });

    const removeItem = (id) => {
        const foundProduct = cartItems.find((item) => item._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);

        setTotalPrice((prevPrice) => prevPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantity((prevQty) => prevQty - foundProduct.quantity);

        setCartItems(newCartItems);

    };

    const addToCart = (product, quantity) => {
        const itemExists = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
        setTotalQuantity((prevQty) => prevQty + quantity);

        if (itemExists) {
            const updatedCartItems = cartItems.map((item) =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity + quantity } // ✅ KEEP IMAGES & DATA
                    : item
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity }]); // ✅ First time add
        }
        toast.success(`${qty} items added successfully to cart!`);

    };

    const clearCart = () => {
  setCartItems([]);
  setTotalPrice(0);
  setTotalQuantity(0);
};



    const toggleProductQuantity = (id, value) => {
        const newCartItem = cartItems.filter((item) => item._id !== id)
        const foundProduct = cartItems.find((item) => item._id === id);
        if (value === "inc") {
            setCartItems([...newCartItem, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice((prevPrice) => prevPrice + foundProduct.price);
            setTotalQuantity((prevQty) => prevQty + 1)
        } else if (value === "dec") {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItem, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
                setTotalPrice((prevPrice) => prevPrice - foundProduct.price);
                setTotalQuantity((prevQty) => prevQty - 1)
            }
        }
    }


    return (
        <CartContext.Provider value={{ removeItem,clearCart, toggleProductQuantity, increaseQty, decreaseQty, totalQuantity, addToCart, qty, setShowCart, showCart, cartItems, setCartItems, totalPrice }}>
            {children}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                draggable />
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
