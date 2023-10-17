import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Moon from "./Moon";
import ISS from "./ISS";

const Earth = ({ displacementScale }) => {
  const earthRef = useRef();
  const [
    earthTextures,
    earthNormalMap,
    earthSpecularMap,
    earthDisplacementMap,
  ] = useTexture([
    "./textures/earth_textures.jpg",
    "./textures/earth_normal_map_textures.jpg",
    "./textures/earth_specular_map_textures.jpg",
    "./textures/earth_Displacement_map_textures.jpg",
  ]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <group>
      <mesh ref={earthRef} receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={earthTextures}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          shininess={1000}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
        />
      </mesh>
      <Moon />
      <ISS />
    </group>
  );
};

export default Earth;
