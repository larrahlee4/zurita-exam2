import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black flex flex-col items-center p-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mt-6 w-5/6 border-4 border-pink-400 p-5 rounded-3xl bg-pink-50 shadow-md"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h1 className="text-4xl font-serif text-center mb-4 text-pink-900">
          About
        </h1>

        <p className="text-gray-700 text-2xl font-medium p-8 ">
          I am Larrah Lee, a first-year IT student at AMA Computer College, who is
          passionate about learning more about computers, software, and web
          technologies. I chose the IT field because I enjoy solving problems
          and discovering how applications and websites are built. Even though I
          am still a beginner, I am motivated to practice and learn new things
          every day.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
