import { motion } from "framer-motion";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project 1 - Product Larrah",
      description:
        "Product 1 Larrah is my first web project, built using HTML, CSS, and JavaScript. It demonstrates my understanding of basic front-end development, including layout, styling, and simple interactive features.",
      url: "https://product-larrah.vercel.app",
      image: project1,
    },
    {
      id: 2,
      name: "Project 2 - Activity 2 Larrah",
      description:
        "This is my second project, Activity 2 Larrah. It is an interactive web project that highlights my progress in layout design, styling, and basic front-end functionality using HTML, CSS, and JavaScript.",
      url: "https://activity-2-larrah.vercel.app",
      image: project2,
    },
    {
      id: 3,
      name: "Project 3 - Exam 1 Larrah",
      description:
        "This is my third project, Exam 1 Larrah. It is a simple web project created as part of my learning exercises in web development and programming.",
      url: "https://exam1-larrah-1ild.vercel.app/",
      image: project3,
    },
  ];

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
        Projects
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-center text-gray-200 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Here are some of my projects. Click on a project to see it live.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl items-stretch"
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
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => window.open(project.url, "_blank")}
            className="group cursor-pointer rounded-3xl p-[3px] h-full
              bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400
              bg-[length:200%_200%]
              animate-[gradientMove_5s_linear_infinite]
              shadow-[0_0_25px_rgba(236,72,153,0.7)]
              hover:shadow-[0_0_45px_rgba(236,72,153,1)]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="overflow-hidden rounded-3xl bg-black bg-opacity-80 p-6 flex flex-col gap-4 h-full transform transition duration-300 hover:scale-105 hover:bg-pink-600/80">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-xl border-2 border-pink-400 transition-transform duration-500 group-hover:scale-110"
              />

              <h2 className="text-2xl md:text-3xl font-semibold text-pink-300">
                {project.name}
              </h2>

              <p className="text-gray-200 text-base md:text-lg flex-1">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
