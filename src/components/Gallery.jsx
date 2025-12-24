import React from "react";
import "../styles/Gallery.css";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic-4 zombo.jpg";
import pic4 from "../images/pic-7.jpg";

const galleryImages = [
    { id: 1, src: pic1, alt: "Workout Session" },
    { id: 2, src: pic2, alt: "Yoga Class" },
    { id: 3, src: pic3, alt: "Zumba Dance" },
    { id: 4, src: pic4, alt: "Strength Training" },
];

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h2>Gallery</h2>

            <div className="gallery-grid">
                {galleryImages.map((image) => (
                    <div key={image.id} className="gallery-card">
                        <img src={image.src} alt={image.alt} />
                        <p>{image.alt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
