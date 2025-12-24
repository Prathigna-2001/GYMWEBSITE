import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">MeridianFit Lounge</h1>
                <div className="nav-links">
                    <NavLink to="/" className="nav-link nav-bt"> Home</NavLink>
                    <NavLink to="/programs" className="nav-link nav-bt"> Programs </NavLink>
                    <NavLink to="/trainers" className="nav-link nav-bts">Trainers </NavLink>
                    <NavLink to="/contact" className="nav-link nav-bts"> Contact</NavLink>
                    <NavLink to="/signup" className="nav-link nav-btn"> Signup </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
