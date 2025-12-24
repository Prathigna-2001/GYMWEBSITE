import React from "react";
import "../styles/Hero.css";
import Marquee from "./Marquee";

function Hero() {
    return (
        <>

            <section className="hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            TRANSFORM YOUR <span>BODY</span> & MIND
                        </h1>

                        <p className="hero-subtitle">
                            Welcome to <strong>Meridian Fit Lounge</strong>, where
                            <span> passion meets power </span>
                            and every step brings you closer to a stronger, healthier you.
                            Our fitness center is an advanced indoor facility designed to support your overall
                            <strong> health, strength, and wellness journey</strong>.
                        </p>

                        <p className="hero-sub">
                            Join <strong>Meridian Fit Lounge</strong> today and experience a space where
                            <span> your goals matter</span>, your effort is valued, and your growth is celebrated.
                            Unlock the best version of yourself with a community that supports and empowers you.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-primary">Join Now</button>
                            <button className="btn-secondary">Explore Programs</button>
                        </div>
                    </div>
                </div>
            </section>
            <Marquee />
        </>
    );
}

export default Hero;
