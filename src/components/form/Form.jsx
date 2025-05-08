// Create Modal Form Component
import React from "react";

const Form = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 w-80 sm:p-6 sm:w-96">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Send Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
