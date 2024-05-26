import { useRef, useEffect } from "react";
import "./services.scss";
import { motion, useInView, useAnimation } from "framer-motion";

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

const Services = () => {
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
      className="services"
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
          focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            voluptate doloribus quis maxime dolore at culpa laudantium iure,
            explicabo eos, doloremque blanditiis sint modi harum quisquam
            officia ea. Inventore, rerum!
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            voluptate doloribus quis maxime dolore at culpa laudantium iure,
            explicabo eos, doloremque blanditiis sint modi harum quisquam
            officia ea. Inventore, rerum!
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            voluptate doloribus quis maxime dolore at culpa laudantium iure,
            explicabo eos, doloremque blanditiis sint modi harum quisquam
            officia ea. Inventore, rerum!
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            voluptate doloribus quis maxime dolore at culpa laudantium iure,
            explicabo eos, doloremque blanditiis sint modi harum quisquam
            officia ea. Inventore, rerum!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
