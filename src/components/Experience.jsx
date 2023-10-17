import { useHelper } from "@react-three/drei";
import Spaceship from "./Spaceship";
import Earth from "./Earth";
import AnimatedStars from "./AnimatedStart";
import { useRef } from "react";
import * as THREE from "three";

const Experience = () => {
  const directionalLightRef = useRef();
  const directionalLightRefTwo = useRef();

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "hotpink");
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, "hotpink");

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <AnimatedStars />
      <directionalLight
        ref={directionalLightRef}
        position={[0, 0, 10]}
        intensity={1}
        castShadow
      />
      <directionalLight
        ref={directionalLightRefTwo}
        position={[0, 0, -10]}
        castShadow
      />
      {/* <Spaceship position-z={1} position-x={5} /> */}
      <Earth displacementScale={0.15} />
    </>
  );
};

export default Experience;
