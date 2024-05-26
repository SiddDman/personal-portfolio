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
          &lt; developer &gt;
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/siddharthdhiman/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/SiddDman">
            <img className="github-logo" src="/github.gif" alt="" />
          </a>
          <a href="http://www.youtube.com/@SiddharthDhiman">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
