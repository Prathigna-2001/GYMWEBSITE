import React from "react";
import { Link } from "react-router-dom";
import About from '../components/About.jsx'
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-logo">GymX</h2>
                    <p className="footer-text">
                        Strength • Fitness • Confidence
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Explore</h3>
                    <Link to="/">Home</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-section">
                    <h3>Gym</h3>
                    <Link to="/About">About</Link>
                    <Link to="/Schedule">Schedule</Link>
                    <Link to="/Gallery">Gallery</Link>
                </div>
                <div className="footer-section">
                    <h3>User</h3>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div className="footer-section">
                    <h3>Support</h3>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/help">Help</Link>
                </div>

            </div>

            <div className="footer-bottom">
                @ 2025 GymX Fitness
            </div>
        </footer>
    );
}

export default Footer;
