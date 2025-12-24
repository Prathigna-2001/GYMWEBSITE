import React from "react";
import "../styles/Marquee.css";

const marqueeItems = [
  "🔥 Flat 50% New Year Offer",
  "💪 Certified Personal Trainers",
  "🏋️ World-Class Gym Equipment",
  "⚡ 24/7 Open | No Holidays",
  "🥗 Free Diet & Nutrition Plan",
  "🏃 Cardio + Strength Training",
  "🎵 Zumba | Yoga | CrossFit",
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
