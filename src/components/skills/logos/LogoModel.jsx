import { Decal, Float } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";

const LogoModel = ({ icon }) => {
  const ref = useRef();
  const texture = useLoader(TextureLoader, icon);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  }, []);

  return (
    <Float speed={2} floatIntensity={6} rotationIntensity={4}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        scale={2.5}
        castShadow
        receiveShadow
        ref={ref}
        onClick={() => (ref.current.rotation.x += 0.5)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="pink"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 2 * Math.PI, 0]}
          scale={1.2}
          flatShading
          map={texture}
        />
      </mesh>
    </Float>
  );
};

export default LogoModel;
