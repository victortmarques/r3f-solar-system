import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [16, 8.5, 19.5] }}
      >
        {/* <ambientLight intensity={1} /> */}
        {/* <Perf /> */}
        <OrbitControls />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
