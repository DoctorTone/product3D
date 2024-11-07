import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import Product from "./components/Product";
import Text from "./UI/Text";

function App() {
  return (
    <>
      <Canvas>
        <Stage shadows="contact" adjustCamera={1.5}>
          <Product />
        </Stage>
        <OrbitControls makeDefault />
      </Canvas>
      <Text />
    </>
  );
}

export default App;
