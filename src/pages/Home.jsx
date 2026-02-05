import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";

function Home() {
  const lines = Array.from({ length: 10 });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-black to-pink-900 flex items-center justify-center overflow-hidden font-['Poppins']">
      
      {lines.map((_, i) => (
        <motion.h1
          key={i}
          className="absolute w-full text-[4rem] md:text-[6rem] font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-widest select-none opacity-15 whitespace-nowrap"
          style={{
            top: `${i * 10}%`,
          }}
          animate={{
            x: i % 2 === 0 ? ["-100%", "100%"] : ["100%", "-100%"],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          FRONTEND DEVELOPER FRONTEND DEVELOPER FRONTEND DEVELOPER FRONTED DEVELOPER
        </motion.h1>
      ))}

      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-80 h-80 md:w-[28rem] md:h-[28rem] object-cover rounded-2xl border-8 border-pink-400 shadow-[0_0_50px_rgba(236,72,153,0.9)]"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        />

        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white tracking-wide">
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Larrah Lee
          </span>
        </h2>

        <p className="text-xl md:text-2xl mt-2 tracking-wider text-cyan-400 font-medium">
          first-year IT student learning web developer and programming
        </p>
      </div>
    </div>
  );
}

export default Home;
