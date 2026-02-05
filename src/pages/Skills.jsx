import { motion } from "framer-motion";

import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import javaScript from "../assets/javaScript.jpg";
import csharp from "../assets/cSharp.jpg";

function Skills() {
  const iconHover = {
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black flex flex-col items-center p-8 gap-6 font-['Poppins']"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-6xl md:text-7xl font-bold text-center text-pink-400 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Skills
      </motion.h1>

      <motion.p
        className="text-center text-gray-300 mb-6 text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        These are my skills and technologies I am learning.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          {
            img: html,
            name: "HTML",
            text: "I can structure web pages using semantic HTML for clean and accessible layouts.",
          },
          {
            img: css,
            name: "CSS",
            text: "I style web pages using CSS and Tailwind to make designs responsive and visually appealing.",
          },
          {
            img: javaScript,
            name: "JavaScript",
            text: "I can add interactivity to websites and create dynamic web applications using JS.",
          },
          {
            img: csharp,
            name: "C#",
            text: "I am learning C# to create applications and explore object-oriented programming.",
          },
        ].map((skill, i) => (
          <motion.div
            key={i}
            className="rounded-3xl p-[3px]
              bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400
              bg-[length:200%_200%]
              animate-[gradientMove_5s_linear_infinite]
              shadow-[0_0_25px_rgba(236,72,153,0.6)]"
          >
            <motion.div
              whileHover="hover"
              className="border-2 border-pink-400 rounded-3xl bg-black bg-opacity-70 p-8 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:bg-pink-600/80"
            >
              <motion.img
                src={skill.img}
                alt={skill.name}
                variants={iconHover}
                className="w-28 h-28 object-cover rounded-xl border-2 border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
              />

              <h2 className="text-2xl font-semibold text-pink-300">
                {skill.name}
              </h2>

              <p className="text-center text-gray-200 text-base">
                {skill.text}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
