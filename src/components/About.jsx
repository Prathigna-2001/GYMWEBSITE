import React from "react";
import "../styles/about.css";

function About() {
    const introVideo = "https://www.pexels.com/download/video/4367580/";
    const workoutVideos = [
        "https://www.pexels.com/download/video/4812848/",
        "https://www.pexels.com/download/video/4671974/",
        "https://www.pexels.com/download/video/4921657/",
    ];

    return (
        <section className="about">

            <div className="about-hero">
                <div className="about-text">
                    <h1>
                        About <span>MeridianFit Lounge</span>
                    </h1>
                    <p>
                        MeridianFit Lounge is a premium gym focused on strength, fitness, and
                        overall wellness. We provide expert guidance, modern equipment, and
                        a motivating environment to help you achieve your goals.
                    </p>
                    <button className="about-btn">Join Now</button>
                </div>

                <div className="about-video">
                    <video
                        src={introVideo}
                        controls
                        autoPlay
                        muted
                        loop
                    />
                </div>
            </div>

            <div className="about-features">
                <div className="feature-card">
                    <h3>Modern Equipment</h3>
                    <p>High-quality machines and free weights for all levels.</p>
                </div>
                <div className="feature-card">
                    <h3>Expert Trainers</h3>
                    <p>Certified trainers with personalized workout plans.</p>
                </div>
                <div className="feature-card">
                    <h3>Proven Results</h3>
                    <p>Thousands of successful fitness transformations.</p>
                </div>
                <div className="feature-card">
                    <h3>Video Training</h3>
                    <p>Exclusive workout and guidance videos.</p>
                </div>
            </div>

            <div className="about-mission">
                <h2>Our Mission</h2>
                <p>
                    To inspire a healthy lifestyle by delivering professional training,
                    supportive community, and consistent motivation.
                </p>
            </div>

            <div className="about-gallery">
                <h2>Workout Videos</h2>
                <div className="gallery-grid">
                    {workoutVideos.map((video, index) => (
                        <video
                            key={index}
                            src={video}
                            controls
                            muted
                        />
                    ))}
                </div>
            </div>
            <div className="about-why">
                <h2>Why Choose MeridianFit Lounge?</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <h4>Personalized Training</h4>
                        <p>Customized workouts and diet plans.</p>
                    </div>
                    <div className="why-card">
                        <h4>Flexible Membership</h4>
                        <p>Plans that fit every lifestyle.</p>
                    </div>
                    <div className="why-card">
                        <h4>Positive Community</h4>
                        <p>Train with motivated fitness lovers.</p>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <div className="stat"><h3>5K+</h3><p>Happy Members</p></div>
                <div className="stat"><h3>25+</h3><p>Certified Trainers</p></div>
                <div className="stat"><h3>10+</h3><p>Years Experience</p></div>
                <div className="stat"><h3>100%</h3><p>Motivation</p></div>
            </div>

            <div className="about-programs">
                <h2>Our Training Programs</h2>
                <ul className="program-list">
                    <li>Strength & Muscle Building</li>
                    <li>Weight Loss & Fat Burn</li>
                    <li>Cardio & HIIT Training</li>
                    <li>Yoga & Flexibility</li>
                    <li>Zumba & Dance Fitness</li>
                    <li>Personal Training</li>
                </ul>
            </div>

            <div className="about-cta">
                <h2>Start Your Fitness Journey Today</h2>
                <p>
                    Join MeridianFit Lounge and transform your body, mind, and confidence.
                </p>
                <button className="about-btn">Get Started</button>
            </div>

        </section>
    );
}

export default About;
