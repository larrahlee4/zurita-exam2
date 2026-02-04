import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black flex flex-col items-center gap-6 p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={profilePic}
        alt="My Profile"
        className="w-100 h-100 object-cover rounded-2xl border-4 border-pink-400 shadow-lg"
      />

      <h1 className="text-5xl font-serif text-white">Larrah Lee</h1>

      <p className="text-pink-200 text-center max-w-md text-xl font-serif">
        First-year IT student learning web development and programming.
      </p>
    </motion.div>
  );
}

export default Home;
