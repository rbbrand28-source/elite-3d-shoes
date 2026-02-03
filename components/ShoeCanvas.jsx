import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RotatingShoe() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 1, 4]} /> {/* Placeholder shoe shape */}
      <meshStandardMaterial color="#00ffff" />
    </mesh>
  );
}

export default function ShoeCanvas() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingShoe />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
