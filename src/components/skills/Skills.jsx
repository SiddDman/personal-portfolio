import "./skills.scss";
import { useRef, useEffect, Suspense } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import LogoModel from "./logos/LogoModel";
import CanvasLoader from "./logos/CanvasLoader";
const technologies = [
  {
    id: 1,
    name: "React",
    icon: "/reactjs.png",
  },
  {
    id: 2,
    name: "NodeJs",
    icon: "/nodejs.png",
  },
  {
    id: 3,
    name: "MongoDB",
    icon: "/mongodb.png",
  },
  {
    id: 4,
    name: "HTML5",
    icon: "/html.png",
  },
  {
    id: 5,
    name: "CSS",
    icon: "/css.png",
  },
  {
    id: 6,
    name: "JavaScript",
    icon: "/javascript.png",
  },
  {
    id: 7,
    name: "MySQL",
    icon: "/mysql.png",
  },
  {
    id: 8,
    name: "Hadoop",
    icon: "/hadoop-logo.png",
  },
  {
    id: 9,
    name: "Python",
    icon: "/python.png",
  },
  {
    id: 10,
    name: "R",
    icon: "/r.png",
  },
  {
    id: 11,
    name: "C",
    icon: "/c.png",
  },
  {
    id: 12,
    name: "C++",
    icon: "/c++.png",
  },
  {
    id: 13,
    name: "C#",
    icon: "/c-sharp.png",
  },
  {
    id: 14,
    name: "Unity",
    icon: "/unity.png",
  },
  {
    id: 15,
    name: "Git",
    icon: "/git.png",
  },
  {
    id: 16,
    name: "Github",
    icon: "/github.png",
  },
];

const variants = {
  initial: {
    x: -500,
    y: -100,
    opacity: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.1,
    },
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: "-100px" });
  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      // animate={isInView && "animate"}
      animate={controls}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          A user interface is like a joke. If you have to explain it,
          <br />
          it{"'"}s not that good.
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.p whileHover={{ color: "orange" }}>Bringing Ideas</motion.p>
            to the
            <motion.b whileHover={{ color: "orange", fontStyle: "italic" }}>
              {" "}
              Web.
            </motion.b>
          </h1>
          <a
            href="https://drive.google.com/file/d/1uoD8hWbC0yGML61RBXsw3O4-gJPrXP9m/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resume</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="logoContainer" variants={variants}>
        <div className="textBox">SKILLS</div>
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
      </motion.div>
    </motion.div>
  );
};

export default Skills;
