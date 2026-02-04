import { motion } from "framer-motion";

import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import javaScript from "../assets/javaScript.jpg";
import csharp from "../assets/cSharp.jpg";

function Skills() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black flex flex-col items-center p-8 gap-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-5xl font-serif text-center text-pink-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Skills
      </motion.h1>

      <motion.p
        className="text-center text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        These are my skills and technologies I am learning.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* HTML */}
        <motion.div
          className="border-2 border-pink-400 rounded-3xl bg-black bg-opacity-70 shadow-md p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:bg-pink-600"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={html}
            alt="HTML"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold text-pink-300">HTML</h2>
          <p className="text-center text-gray-200 text-sm">
            I can structure web pages using semantic HTML for clean and
            accessible layouts.
          </p>
        </motion.div>

        {/* CSS */}
        <motion.div
          className="border-2 border-pink-400 rounded-3xl bg-black bg-opacity-70 shadow-md p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:bg-pink-600"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={css}
            alt="CSS"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold text-pink-300">CSS</h2>
          <p className="text-center text-gray-200 text-sm">
            I style web pages using CSS and Tailwind to make designs responsive
            and visually appealing.
          </p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="border-2 border-pink-400 rounded-3xl bg-black bg-opacity-70 shadow-md p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:bg-pink-600"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={javaScript}
            alt="JavaScript"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold text-pink-300">JavaScript</h2>
          <p className="text-center text-gray-200 text-sm">
            I can add interactivity to websites and create dynamic web
            applications using JS.
          </p>
        </motion.div>

        {/* C# */}
        <motion.div
          className="border-2 border-pink-400 rounded-3xl bg-black bg-opacity-70 shadow-md p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:bg-pink-600"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={csharp}
            alt="CSharp"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold text-pink-300">C#</h2>
          <p className="text-center text-gray-200 text-sm">
            I am learning C# to create applications and explore object-oriented
            programming.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
