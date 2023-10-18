import React, { useRef, useCallback } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Moon from "./Moon";
import ISS from "./ISS";
import * as THREE from "three";

const Earth = React.memo(({ displacementScale }) => {
  const earthRef = useRef();
  const earthPositionRef = useRef(new THREE.Vector3(8, 0, 0));
  const clockRef = useRef(new THREE.Clock());

  const [
    earthTextures,
    earthNormalMap,
    earthSpecularMap,
    earthDisplacementMap,
    earthEmissiveMap,
  ] = useTexture([
    "./textures/earth_textures.jpg",
    "./textures/earth_normal_map_textures.jpg",
    "./textures/earth_specular_map_textures.jpg",
    "./textures/earth_Displacement_map_textures.jpg",
    "./textures/earth_nightmap_textures.jpg",
  ]);

  const updateEarthPosition = useCallback(() => {
    // Calculate the Earth's position based on its angle from the Sun
    const angle = clockRef.current.getElapsedTime() * 0.5;
    const distance = 8;
    const x = Math.sin(angle) * distance;
    const z = Math.cos(angle) * distance;
    earthRef.current.position.set(x, 0, z);
    earthRef.current.rotation.y += 0.002;
    earthPositionRef.current = earthRef.current.position;
  }, []);

  useFrame(() => {
    updateEarthPosition();
  });

  return (
    <group ref={earthRef}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={earthTextures}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          shininess={1000}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
          emissiveMap={earthEmissiveMap}
          emissive={0xffffff}
          emissiveIntensity={1.5}
        />
      </mesh>
      <Moon />
      <ISS />
    </group>
  );
});

export default Earth;
