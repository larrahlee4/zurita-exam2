import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg"; // make sure this image exists

function About() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black flex flex-col items-center p-5 font-['Poppins']"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mt-16 w-5/6 relative rounded-3xl p-[3px]
        bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400
        bg-[length:200%_200%]
        animate-[gradientMove_5s_linear_infinite]
        shadow-[0_0_30px_rgba(236,72,153,0.7)]"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 45px rgba(236,72,153,0.9)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
      
        <motion.div
          className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-full p-[4px]
          bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400
          animate-[gradientMove_5s_linear_infinite]
          shadow-[0_0_25px_rgba(236,72,153,0.8)]"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white"
          />
        </motion.div>

        <div className="border-4 border-pink-400 p-8 pt-20 rounded-3xl bg-pink-50">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-pink-900 tracking-wide">
            About
          </h1>

          <p className="text-gray-700 text-2xl md:text-3xl font-medium leading-relaxed px-4 md:px-8">
            I am Larrah Lee, a first-year IT student at AMA Computer College who
            is passionate about computers, software, and web development. I
            enjoy learning how websites and applications are built and love
            solving problems through technology.
            <br />
            <br />
            As a beginner in the IT field, I am continuously improving my skills
            in HTML, CSS, and JavaScript by creating small projects and
            practicing every day. My goal is to become a skilled and creative
            developer who can build useful and user-friendly digital solutions
            in the future.
            <br />
            <br />
            <span className="italic text-pink-700">
              “Every expert was once a beginner. I am learning, growing, and
              building my future one project at a time.”
            </span>
            <br></br>
            <span className="italic text-pink-700">
              “Success doesn’t come from what you do occasionally, it comes from
              what you do consistently.”
            </span>
            <br />
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
