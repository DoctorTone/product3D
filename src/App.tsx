import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import { SCENE } from "./state/Config";
import Lights from "./components/Lights";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition, fov: 60 }}>
        <Lights />
        <Plane args={[1000, 1000]} rotation-x={-Math.PI / 2}>
          <meshStandardMaterial color="yellow" />
        </Plane>
        <Product />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
