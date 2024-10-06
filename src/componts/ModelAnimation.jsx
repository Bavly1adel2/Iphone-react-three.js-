// src/pages/ModelAnimation.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ModelViewer from '../components/ModelViewer'; // Import your ModelViewer component

const ModelAnimation = () => {
    const containerRef = useRef(); // Create a ref for the container

    // Apply GSAP animations
    useEffect(() => {
        // Scale animation when the page loads
        gsap.from(containerRef.current, {
            duration: 1.5,
            scale: 0.5,
            ease: 'power3.out',
        });

        // Rotate animation loop
        gsap.to(containerRef.current, {
            duration: 10,
            rotation: 360,
            repeat: -1,
            ease: 'none',
        });
    }, []);

    return (
        <div ref={containerRef} style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ModelViewer /> {/* Use the ModelViewer component */}
        </div>
    );
};

export default ModelAnimation;
