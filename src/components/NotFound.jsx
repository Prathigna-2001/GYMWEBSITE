import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/bglogo.png"
import "../styles/404Page.css";

function NotFound() {
    return (
        <div className="notfound-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <img src={pic} alt="" />
            <Link to="/" className="home-btn">Go Home</Link>
        </div>
    );
}

export default NotFound;
