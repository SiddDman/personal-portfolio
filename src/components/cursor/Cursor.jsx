import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: pos.x - 19.5, y: pos.y - 15 }}
    ></motion.div>
  );
};

export default Cursor;
