"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export const BoxAnimate = () => {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Box = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <BoxAnimate />
    </Canvas>
  );
};

export default Box;
