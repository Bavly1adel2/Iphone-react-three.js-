// src/components/ModelViewer.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Component to load and display the 3D model
const Model = React.forwardRef((_, ref) => {
    const { scene } = useGLTF(''); // Adjust the path to your model

    return <primitive ref={ref} object={scene} position={[0, 0, 0]} />;
});

const ModelViewer = () => {
    const modelRef = useRef(); // Create a ref for the model
    const [modelScale, setModelScale] = useState(1.5); // State to store model scale

    // GSAP Animation for initial effects
    useEffect(() => {
        if (modelRef.current) {
            gsap.fromTo(modelRef.current.position,
                { y: -3 }, // Start position
                { y: 0, duration: 2, ease: 'bounce.out',
                    scrollTrigger: {
                        trigger: modelRef.current, // Element that triggers the animation
                        start: 'top 80%', // Start when the model is at 80% of the viewport height
                        end: 'top 30%', // End when the model is at 20% of the viewport height
                        scrub: true, // Smooth scrubbing
                    },
                } // End position with bounce effect
            );
        }
    }, []);

    // Continuous rotation of the model
    useEffect(() => {
        const animate = () => {
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.02; // Adjust rotation speed
            }
            requestAnimationFrame(animate); // Call animate again on the next frame
        };

        animate(); // Start the animation loop
    }, []);

    // Responsive handling based on window size
    useEffect(() => {
        const handleResize = () => {
            // Calculate model scale based on window size
            const scale = window.innerWidth < 768 ? 1 : 1.5; // Smaller scale for smaller screens
            setModelScale(scale);
        };

        // Add event listener to handle screen resize
        window.addEventListener('resize', handleResize);
        handleResize(); // Call handler once initially

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Canvas
            style={{ height: '100vh', width: '100%', position: 'absolute', zIndex: 1, left: -350 }} // Responsive full screen height
            camera={{ position: [0, 1, 5], fov: 50 }} // Camera position
        >
            {/* Lighting Setup */}
            <ambientLight intensity={2} /> {/* Increase ambient light intensity */}
            <directionalLight position={[5, 10, 5]} intensity={3} /> {/* Increase directional light intensity */}
            <pointLight position={[0, 10, 10]} intensity={2.5} /> {/* Increase point light intensity */}
            <spotLight position={[-5, 15, 5]} angle={0.3} intensity={2} /> {/* Add a spot light for extra brightness */}

            {/* 3D Model with responsive scale */}
            <Model ref={modelRef} scale={new Array(3).fill(modelScale)} />

            {/* OrbitControls with restricted zoom and pan */}
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default ModelViewer;
