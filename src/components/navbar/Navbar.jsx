import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          &lt; Siddharth / &gt;
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/siddharthdhiman/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/SiddDman"
            target="_blank"
            rel="noreferrer"
          >
            <img className="github-logo" src="/github.gif" alt="" />
          </a>
          <a
            href="https://www.youtube.com/@SiddharthDhiman"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/instagram.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
