"use client"

import React, {useState} from 'react';
import {  Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  // Mock State for Form handling (like in ResinArtHomePage)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    // In a real application, this data would be sent to a server.
    setFormData({ name: '', email: '', message: '' });
    // Use a console log for a success message instead of an alert
    console.log("Success: Your message has been sent!"); 
  };

    // Utility component for consistent input styling
    const FormInput = ({ label, name, type = 'text' }) => (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150"
        />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

        <main className="container mx-auto px-6 py-20">
            <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
                Connect With Us
            </h1>
            <p className="text-center text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                We love hearing from our customers! Fill out the form or reach us via our details below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info Block */}
                <div className="lg:col-span-1 space-y-8 p-6 bg-teal-100 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold text-teal-800 mb-4">Our Details</h2>
                    <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800">Email Inquiries</h4>
                            <p className="text-gray-600">epoxydreamsart@example.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800">Customer Hotline</h4>
                            <p className="text-gray-600">(555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800">Studio Location</h4>
                            <p className="text-gray-600">24/7 Online Service (Custom Consultations)</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Block */}
                <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                    <form onSubmit={handleSubmit}>
                        <FormInput label="Your Name" name="name" />
                        <FormInput label="Email Address" name="email" type="email" />

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Your Message (e.g., Commission Request, Order Question)
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 text-lg font-bold bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-[1.005]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
        
    </div>
  );
};

export default ContactPage;