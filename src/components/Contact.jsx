import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        setTimeout(() => {
            setIsSending(false);
            setMessage("Message sent successfully!");
            e.target.reset();

            setTimeout(() => setMessage(""), 3000);
        }, 1500);
    };

    return (
        <section className="contact">
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">
                    Have questions? Reach out to us anytime — we’re here to help!
                </p>

                <div className="contact-grid">
                    {/* FORM */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" required />

                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />

                        <label>Message</label>
                        <textarea placeholder="Write your message..." required />

                        <button
                            type="submit"
                            className="contact-btn"
                            disabled={isSending}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>

                        {message && <p className="success-msg">{message}</p>}
                    </form>

                    {/* INFO */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>📍 Hyderabad, India</p>
                        <p>📞 +91 98765 43210</p>
                        <p>📧 support@gymfit.com</p>

                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
