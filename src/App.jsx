import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 3, 3] }}
      >
        {/* <Perf /> */}
        <OrbitControls />
        <color attach="background" args={["#000000"]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
