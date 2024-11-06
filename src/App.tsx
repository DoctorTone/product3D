import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <Box />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
