import { useState, useEffect, useRef } from "react";
import "../styles/photos.css";

// Screen width at or below which the mobile image is used.
const MOBILE_BREAKPOINT = "(max-width: 768px)";

function Photos({ photos }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldTransition, setShouldTransition] = useState(true);
    const slideRef = useRef(null);
    const timerRef = useRef(null);

    // Filter out any invalid photo objects (missing src)
    const validPhotos = photos && photos.length > 0 ? photos.filter(photo => photo && photo.src) : [];

    // Check if single image or carousel mode
    const isSingleImage = validPhotos.length === 1;
    const displayPhotos = isSingleImage ? validPhotos : [...validPhotos, validPhotos[0]];

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5000);
    };

    useEffect(() => {
        // Only start timer for carousel mode (multiple images)
        if (!isSingleImage && validPhotos.length > 0) {
            startTimer();
        }

        // Handle visibility change (tab hidden/shown)
        const handleVisibilityChange = () => {
            if (isSingleImage) return; // No timer to manage for single images

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
    }, [isSingleImage, validPhotos.length]);

    const handleTransitionEnd = () => {
        // If we've reached the duplicate first photo, reset without animation
        if (currentIndex === validPhotos.length) {
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

    // Return null if no valid photos
    if (validPhotos.length === 0) {
        return null;
    }

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
                        // <picture> lets the browser pick the mobile file on small screens.
                        // .carousel-picture uses display: contents so the <img> stays the slide item.
                        <picture key={index} className="carousel-picture">
                            {photo.mobile && (
                                <source media={MOBILE_BREAKPOINT} srcSet={photo.mobile} />
                            )}
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="carousel-image"
                            />
                        </picture>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Photos;