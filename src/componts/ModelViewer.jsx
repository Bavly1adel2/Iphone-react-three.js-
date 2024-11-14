// src/components/ModelViewer.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Model = React.forwardRef((_, ref) => {
    const { scene } = useGLTF('scene.glb'); // Adjust the path to your model

    return <primitive ref={ref} object={scene} position={[0, 0, 0]} />;
});

const ModelViewer = () => {
    const modelRef = useRef();
    const [modelScale, setModelScale] = useState(0.8); // Smaller initial model scale

    useEffect(() => {
        if (modelRef.current) {
            gsap.fromTo(
                modelRef.current.position,
                { y: -3 },
                {
                    y: 0,
                    duration: 2,
                    ease: 'bounce.out',
                    scrollTrigger: {
                        trigger: modelRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    useEffect(() => {
        const animate = () => {
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.02;
            }
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const scale = window.innerWidth < 768 ? 0.5 : 0.8; // Smaller scale for all screens
            setModelScale(scale);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Canvas
            style={{ height: '100vh', width: '100%', position: 'absolute', zIndex: 1, left: -350 }}
            camera={{ position: [0, 1, 5], fov: 50 }}
        >
            <ambientLight intensity={2} />
            <directionalLight position={[5, 10, 5]} intensity={3} />
            <pointLight position={[0, 10, 10]} intensity={2.5} />
            <spotLight position={[-5, 15, 5]} angle={0.3} intensity={2} />

            <Model ref={modelRef} scale={new Array(3).fill(modelScale)} />

            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default ModelViewer;
