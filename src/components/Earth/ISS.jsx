import { useGLTF } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const ISS = () => {
  const issRef = useRef();
  const memoizedISS = useMemo(() => {
    return useGLTF("./models/ISSModel/ISS_stationary.gltf");
  });
  const xAxis = 2;
  useFrame(({ clock }) => {
    // Orbit Rotation
    issRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis;
    issRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis;
  });

  return (
    <mesh>
      <primitive
        ref={issRef}
        object={memoizedISS.scene}
        position={[xAxis, 0, 0]}
        scale={0.005}
      />
    </mesh>
  );
};

export default ISS;
