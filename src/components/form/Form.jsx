import React, { useState, useRef } from "react"; // pakai useRef
import emailjs from "@emailjs/browser";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Form = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        time: new Date().toLocaleString(),
        message: "",
    });

    const formRef = useRef(); // 🔑 inilah ref-nya

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // ✅ Kirim form HTML ke EmailJS
        emailjs
            .sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(() => {
                alert("Pesan berhasil dikirim!");
                closeModal();
            })
            .catch((err) => {
                console.error("Gagal kirim:", err);
                alert("Gagal mengirim pesan.");
            });
    };
 
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-4 w-80 sm:p-6 sm:w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl text-center font-bold">Contact Us</h2>
                    <CloseRoundedIcon className="cursor-pointer" onClick={closeModal} />
                </div>
                <form ref={formRef} onSubmit={sendEmail}> {/* 👈 ref di sini */}
                    <input type="hidden" name="time" value={formData.time} />
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Doe"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="janedoe@gmail.com"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject of your message"
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full px-3 py-2 border rounded"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
