import { useState, useEffect, useRef } from "react";
import "../styles/photos.css";
import buildingRow from "../assets/home/Building-row.jpeg";
import buildingFront from "../assets/home/Building-front.jpeg";
import buildingInside from "../assets/home/Building-inside.jpeg";
import airconsLandscape from "../assets/home/Aircons-landscape.jpeg";

// Default photos for home page
const defaultPhotos = [
    { src: buildingRow, alt: "Building Row" },
    { src: buildingFront, alt: "Building Front" },
    { src: buildingInside, alt: "Building Inside" },
    { src: airconsLandscape, alt: "Air Conditioning Landscape" },
];

function Photos({ photos = defaultPhotos }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldTransition, setShouldTransition] = useState(true);
    const slideRef = useRef(null);
    const timerRef = useRef(null);

    // Duplicate first photo at end for seamless looping
    const displayPhotos = [...photos, photos[0]];

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        
        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5000);
    };

    useEffect(() => {
        startTimer();

        // Handle visibility change (tab hidden/shown)
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Tab is hidden - clear the timer
                if (timerRef.current) clearInterval(timerRef.current);
            } else {
                // Tab is visible again - restart the timer
                startTimer();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    const handleTransitionEnd = () => {
        // If we've reached the duplicate first photo, reset without animation
        if (currentIndex === photos.length) {
            setShouldTransition(false);
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        // Re-enable transitions after reset
        if (!shouldTransition) {
            const timeout = setTimeout(() => {
                setShouldTransition(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [shouldTransition]);

    return (
        <div className="photo-banner">
            <div className="carousel-container">
                <div
                    ref={slideRef}
                    className="carousel-slide"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: shouldTransition ? "transform 0.6s ease-in-out" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {displayPhotos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo.src}
                            alt={photo.alt}
                            className="carousel-image"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Photos;