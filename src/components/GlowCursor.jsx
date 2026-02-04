import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function GlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 w-32 h-32 rounded-full 
                 bg-pink-500/30 blur-2xl"
      animate={{
        x: position.x - 64,
        y: position.y - 64,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    />
  );
}

export default GlowCursor;
