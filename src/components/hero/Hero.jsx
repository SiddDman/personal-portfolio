import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imgVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-400%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 7,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            HI, I{"'"}M SIDDHARTH DHIMAN
          </motion.h2>
          <div className="typeWriter">
            <motion.h1 variants={textVariants}>
              <Typewriter
                words={[" Web Developer", "Software Engineer", "The IT Guy"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h1>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <a href="#Skills">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/personal-portfolio/scroll.png"
              alt=""
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        FrontEnd Developer Tech Enthusiast Gamer
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={imgVariants}
        initial="initial"
        animate="animate"
      >
        <img src="/personal-portfolio/hero.webp" alt="avatar" loading="eager" />
      </motion.div>
    </div>
  );
};

export default Hero;
