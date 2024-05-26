import { useRef, useEffect } from "react";
import "./education.scss";
import {
  motion,
  useScroll,
  useInView,
  useTransform,
  useAnimation,
} from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    transition: {
      duration: 0.01,
      type: "spring",
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  const ref = useRef();
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 250]);
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isInView, controls]);

  return (
    <div className="education">
      <motion.div
        className="heading"
        variants={variants}
        initial="initial"
        // animate="animate"
        // animate={isInView && "animate"}
        animate={controls}
      >
        <h1>Education</h1>
        <motion.div className="progressBar"></motion.div>
      </motion.div>
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src="/iit_dhn.png" alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <p>
                I have completed my Bachelor of Technology from Indian Institute
                of Technology(Indian School of Mines) and securing a good rank
                in JEE Advanced.I obtained 91% in 12th standard and 10 CGPA in
                10th standard.I have a keen interest in the fields of web
                development and game development, and I have acquired various
                skills and technologies related to these domains. I am
                proficient in C++ and C and have good knowledge of JavaScript,
                MySQL, React, and MongoDB. I gained some experience with C#,
                Blender, and Unity from University of Colorado{"'"}s Game
                Development Certification.After completion I made a basic 3D
                endless runner game and some 2D games.I learned Data Analytics
                from Google{"'"}s Data Analytics Certification and gained skills
                like Data Collection,Data Cleaning,Data Processing,Data Analysis
                and Data Visualization. Along the way I learned Microsoft
                Excel/Google Sheets,R Programming and Tableau.I was a member of
                the Animation and Game Design Club of my college, where I
                organized and participated in various events and workshops to
                share new ideas with the students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
