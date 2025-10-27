"use client"
import React, { useState } from 'react';

// Main Auth component
const AuthPage = () => {
    // State to determine which view is active.
    // We use `isSignInView` to align with the form being displayed.
    const [isSignInView, setIsSignInView] = useState(true);

    // State for form fields
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Theme colors
    const primaryColor = 'bg-red-600';
    const hoverColor = 'hover:bg-red-700';
    const accentText = 'text-red-600';

    // Function to toggle between Sign In and Sign Up views
    const toggleView = () => {
        setIsSignInView(!isSignInView);
        // Clear form data on switch for a clean slate
        setFormData({ username: '', email: '', password: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for actual authentication/registration logic
        const action = isSignInView ? 'Signing In' : 'Signing Up';
        console.log(`${action} with data:`, formData);

        // In a real application, you would call an API here.
        // For demonstration, we'll just log to the console.
        alert(`Attempting to ${action.toLowerCase()}... Check console for data payload.`);
    };

    // --- Input Field Component ---
    const InputField = ({ name, type, placeholder, value, onChange, isVisible = true }) => {
        if (!isVisible) return null;
        return (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out text-gray-800 placeholder-gray-400 shadow-sm"
            />
        );
    };

    // --- Main Render Logic ---
    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gray-100 font-[Inter] antialiased">
            {/* Auth Card Container */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 ease-in-out hover:shadow-red-300/50">

                {/* Logo/Icon Area */}
                <div className="text-center mb-8">
                    <svg className="w-16 h-16 mx-auto text-red-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {/* Pizza Slice Icon */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21v-8m0 0a3 3 0 00-3-3H4.5M12 13h7.5a3 3 0 013 3v4.5M12 13a3 3 0 013-3m-3 3l-6-6M9 9h.01M15 9h.01M18 15h.01" />
                    </svg>
                    <h1 className="text-xl font-bold text-gray-700">Pizza Perfection</h1>
                </div>

                {/* FORM CONTENT */}
                <form onSubmit={handleSubmit} className="w-full">

                    {/* Conditional Heading & Description */}
                    {isSignInView ? (
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
                            Welcome Back!
                        </h2>
                    ) : (
                        <>
                            <h2 className="text-4xl font-extrabold text-gray-800 mb-2 text-center tracking-tight">
                                Create Account
                            </h2>
                            <p className="text-sm text-gray-500 mb-6 text-center max-w-xs mx-auto">
                                Join us to get the best deals on the tastiest, fresh-baked slices!
                            </p>
                        </>
                    )}

                    {/* Form Fields */}
                    <InputField
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        isVisible={!isSignInView} // Only show in Sign Up view
                    />

                    <InputField
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        isVisible={true} // Show in both views
                    />

                    <InputField
                        name="password"
                        type="password"
                        placeholder={isSignInView ? "Password" : "Password (Min 6 characters)"}
                        value={formData.password}
                        onChange={handleChange}
                        isVisible={true} // Show in both views
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full ${primaryColor} text-white font-bold py-3 rounded-xl transition duration-300 transform shadow-lg hover:scale-[1.01] ${hoverColor} focus:outline-none focus:ring-4 focus:ring-red-300 mt-4`}
                    >
                        {isSignInView ? 'Sign In' : 'Sign Up'}
                    </button>

                    {/* Toggle Link */}
                    <div className="mt-8 text-center text-sm">
                        <p className="text-gray-600">
                            {isSignInView ? 'New to us?' : 'Already a member?'}
                            {' '}
                            <button
                                type="button"
                                onClick={toggleView}
                                className={`font-semibold ${accentText} hover:text-red-800 transition duration-150 focus:outline-none`}
                            >
                                {isSignInView ? 'Join us today.' : 'Sign in.'}
                            </button>
                        </p>
                    </div>
                </form>
                {/* END FORM CONTENT */}

            </div>
        </div>
    );
};

// The main App component required by the execution environment
export default AuthPage;
