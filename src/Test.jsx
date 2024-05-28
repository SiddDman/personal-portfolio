import "./test.scss";
import { motion, spring } from "framer-motion";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import LogoModel from "./components/skills/logos/LogoModel";
import CanvasLoader from "./components/skills/logos/CanvasLoader";

const technologies = [
  {
    id: 1,
    name: "React",
    icon: "/public/reactjs.png",
  },
  {
    id: 2,
    name: "NodeJs",
    icon: "/public/nodejs.png",
  },
  {
    id: 3,
    name: "MongoDB",
    icon: "/public/mongodb.png",
  },
  {
    id: 4,
    name: "HTML5",
    icon: "/public/html.png",
  },
  {
    id: 5,
    name: "CSS",
    icon: "/public/css.png",
  },
  {
    id: 6,
    name: "JavaScript",
    icon: "/public/javascript.png",
  },
  {
    id: 7,
    name: "MySQL",
    icon: "/public/mysql.png",
  },
  {
    id: 8,
    name: "Hadoop",
    icon: "/public/hadoop-logo.png",
  },
  {
    id: 9,
    name: "Python",
    icon: "/public/python.png",
  },
  {
    id: 10,
    name: "R",
    icon: "/public/r.png",
  },
  {
    id: 11,
    name: "C",
    icon: "/public/c.png",
  },
  {
    id: 12,
    name: "C++",
    icon: "/public/c++.png",
  },
  {
    id: 13,
    name: "C#",
    icon: "/public/c-sharp.png",
  },
  {
    id: 14,
    name: "Unity",
    icon: "/public/unity.png",
  },
  {
    id: 15,
    name: "Git",
    icon: "/public/git.png",
  },
  {
    id: 16,
    name: "Github",
    icon: "/public/github.png",
  },
];

const Test = () => {
  return (
    <div className="test">
      <div className="container">
        {technologies.map((tech) => (
          <div className="box" key={tech.id}>
            <Canvas
              gl={{ preserveDrawingBuffer: true }}
              camera={{ position: [0, 0, 5] }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <Environment preset="dawn" />
                <LogoModel icon={tech.icon} />
              </Suspense>
              <Preload all />
            </Canvas>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
