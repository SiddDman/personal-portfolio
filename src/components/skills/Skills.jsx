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
    name: "NextJs",
    icon: "/personal-portfolio/nextjs.png",
  },
  {
    id: 2,
    name: "ReactJs",
    icon: "/personal-portfolio/reactjs.png",
  },
  {
    id: 3,
    name: "NodeJs",
    icon: "/personal-portfolio/nodejs.png",
  },
  {
    id: 4,
    name: "MongoDB",
    icon: "/personal-portfolio/mongodb.png",
  },
  {
    id: 17,
    name: "TypeScript",
    icon: "/personal-portfolio/typescript.png",
  },
  {
    id: 5,
    name: "HTML",
    icon: "/personal-portfolio/html.png",
  },
  {
    id: 6,
    name: "CSS",
    icon: "/personal-portfolio/css.png",
  },
  {
    id: 7,
    name: "JavaScript",
    icon: "/personal-portfolio/javascript.png",
  },
  {
    id: 18,
    name: "Tailwind CSS",
    icon: "/personal-portfolio/tailwind.png",
  },
  {
    id: 8,
    name: "MySQL",
    icon: "/personal-portfolio/mysql.png",
  },
  {
    id: 9,
    name: "Python",
    icon: "/personal-portfolio/python.png",
  },
  {
    id: 10,
    name: "Hadoop",
    icon: "/personal-portfolio/hadoop-logo.png",
  },
  // {
  //   id: 11,
  //   name: "C",
  //   icon: "/personal-portfolio/c.png",
  // },
  {
    id: 12,
    name: "C++",
    icon: "/personal-portfolio/c++.png",
  },
  {
    id: 13,
    name: "C#",
    icon: "/personal-portfolio/c-sharp.png",
  },
  {
    id: 14,
    name: "Unity",
    icon: "/personal-portfolio/unity.png",
  },
  {
    id: 15,
    name: "Git",
    icon: "/personal-portfolio/git.png",
  },
  // {
  //   id: 16,
  //   name: "Github",
  //   icon: "/personal-portfolio/github.png",
  // },
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
            href="https://drive.google.com/file/d/17em8BXyc51If7lYkUQysxAzNZKeg_x5N/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resume</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="logoContainer" variants={variants}>
        <div className="textBox">Skills</div>
        <div className="container">
          {technologies.map((tech) => (
            <div className="box" key={tech.id}>
              <Canvas
                gl={{ preserveDrawingBuffer: true, alpha: true }}
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
              {tech.name}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;