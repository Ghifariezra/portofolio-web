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
        <div className="wrapper-form" data-aos="fade-up">
            <div className="form-content" data-aos="zoom-in" data-aos-duration="1000">
                <div className="header-form">
                    <h2 className="contact-form">Send by email</h2>
                    <CloseRoundedIcon className="cursor-pointer" onClick={closeModal} />
                </div>
                <form ref={formRef} onSubmit={sendEmail}> {/* 👈 ref di sini */}
                    <input type="hidden" name="time" value={formData.time} />
                    <div className="mb-4">
                        <label className="label-name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Doe"
                            className="input-name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label-email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="janedoe@gmail.com"
                            className="input-email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label-subject">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject of your message"
                            className="input-subject"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label-message">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="input-message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn-send"
                    >
                        Submit Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
