import React, { useRef, useCallback } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Moon = React.memo(() => {
  const moonRef = useRef();
  const clockRef = useRef(new THREE.Clock());

  const [moonTextures] = useTexture(["./textures/moon_textures.jpg"]);
  const xAxis = 4;

  const updateMoonPosition = useCallback(() => {
    // Orbit Rotation
    moonRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.2) * xAxis;
    moonRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.2) * xAxis;

    // Axis Rotation
    moonRef.current.rotation.y += 0.002;
  }, []);

  useFrame(() => {
    updateMoonPosition();
  });

  return (
    <mesh ref={moonRef} position={[xAxis, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhongMaterial
        map={moonTextures}
        emissiveMap={moonTextures}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  );
});

export default Moon;
