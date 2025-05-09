import React, { useState } from "react";

const Form = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const fetchDataForm = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Data has been sent");
        // Bisa kirim ke API, reset form, dll.
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-4 w-80 sm:p-6 sm:w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl text-center font-bold">Contact Us</h2>
                    <span
                        className="material-symbols-outlined cursor-pointer"
                        onClick={closeModal}
                    >
                        close
                    </span>
                </div>
                <form onSubmit={fetchDataForm}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
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
