import React from "react";
import { Cylinder } from "@react-three/drei";
import { SCENE } from "../state/Config";

const Product = () => {
  return (
    <Cylinder args={[SCENE.baseRadius, SCENE.baseRadius, SCENE.baseHeight]}>
      <meshStandardMaterial color={"lightgrey"} />
    </Cylinder>
  );
};

export default Product;
