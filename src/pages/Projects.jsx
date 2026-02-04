import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project 1 - Product Larrah",
      description:
        "This is my first project, Product Larrah. It showcases my skills in HTML, CSS, and JavaScript to create a simple web application.",
      url: "https://product-larrah.vercel.app",
    },
    {
      id: 2,
      name: "Project 2 - Activity 2 Larrah",
      description:
        "This is my second project, Activity 2 Larrah. It is an interactive project demonstrating my learning in web development.",
      url: "https://activity-2-larrah.vercel.app",
    },
    {
      id: 3,
      name: "Project 3 - Exam 1 Larrah",
      description:
        "This is my third project, Exam 1 Larrah. It is a simple web project created as part of my learning exercises in web development and programming.",
      url: "https://exam1-larrah-1ild.vercel.app/",
    },
  ];

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
        Projects
      </motion.h1>

      <motion.p
        className="text-xl text-center text-gray-200 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Here are some of my projects. Click on a project to see it live.
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
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => window.open(project.url, "_blank")}
            className="cursor-pointer border-2 border-pink-400 rounded-3xl bg-black bg-opacity-70 shadow-md p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:bg-pink-600"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-serif text-pink-300">
              {project.name}
            </h2>
            <p className="text-gray-200">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
