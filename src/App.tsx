import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import Product from "./components/Product";
import { Loading } from "./components/Loading";
import Text from "./UI/Text";

const INTERACTIVE = false;

function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={<Loading />}>
          <Stage shadows="contact" adjustCamera={1.5}>
            <Product />
          </Stage>
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan={INTERACTIVE}
          enableRotate={INTERACTIVE}
          enableZoom={INTERACTIVE}
        />
      </Canvas>
      <Text />
    </>
  );
}

export default App;
