import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sun = () => {
  const sunRef = useRef();
  const [sunTextures] = useTexture(["./textures/sun_textures.jpg"]);

  useFrame(() => {
    sunRef.current.rotation.y -= 0.002;
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhongMaterial
        map={sunTextures}
        emissiveMap={sunTextures}
        emissiveIntensity={0.6}
        emissive={0xffffff}
      />
      <pointLight castShadow intensity={100} />
    </mesh>
  );
};

export default Sun;
