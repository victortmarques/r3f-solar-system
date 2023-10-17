import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Moon = () => {
  const moonRef = useRef();
  const [moonTextures] = useTexture(["./textures/moon_textures.jpg"]);
  const xAxis = 4;

  useFrame(({ clock }) => {
    // Orbit Rotation
    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * xAxis;
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * xAxis;

    // Axis Rotation
    moonRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={moonRef} position={[xAxis, 0, 0]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhongMaterial map={moonTextures} />
    </mesh>
  );
};

export default Moon;
