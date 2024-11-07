import React from "react";
import { Cylinder } from "@react-three/drei";
import { SCENE } from "../state/Config";
import { Watch } from "../models/Watch";

const Product = () => {
  return (
    <>
      <Watch rotation={[0, 0, 0]} />
    </>
  );
};

export default Product;
