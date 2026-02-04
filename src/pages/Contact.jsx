import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import defaultProfile from "../assets/defaultProfile.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Alice",
      comment: "Great work! Very professional and easy to communicate with.",
      profile: profile1,
    },
    {
      id: 2,
      name: "Bob",
      comment: "Amazing skills and fast delivery. Highly recommended!",
      profile: profile2,
    },
    {
      id: 3,
      name: "Charlie",
      comment: "Larrah is very talented and creative. Loved the result!",
      profile: profile3,
    },
    {
      id: 4,
      name: "Diana",
      comment: "Impressive work, exceeded expectations. Thank you!",
      profile: profile4,
    },
  ]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    setReviews([
      ...reviews,
      {
        id: Date.now(),
        name,
        comment,
        profile: defaultProfile,
      },
    ]);

    setName("");
    setComment("");
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black flex flex-col items-center p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <motion.div
          className="flex-1 bg-pink-50 border-2 border-pink-400 rounded-3xl shadow-lg p-6 flex flex-col"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-pink-700 border-b-2 border-pink-300 pb-2">
            Reviews
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-2xl border-2 border-pink-400"
            />

            <textarea
              placeholder="Your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border-2 border-pink-400 px-4 py-2 rounded-2xl"
            />

            <button
              type="submit"
              className="bg-pink-700 text-white px-4 py-2 rounded-2xl hover:bg-pink-600 transition"
            >
              Submit
            </button>
          </form>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="flex items-start gap-3 border-l-4 border-pink-400 bg-pink-50 p-3 rounded shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={review.profile || defaultProfile}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-pink-800">{review.name}</p>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/3 bg-pink-50 border-2 border-pink-400 rounded-3xl shadow-lg p-6 flex flex-col gap-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-700 border-b-2 border-pink-300 pb-2">
            Contact
          </h2>

          <div className="flex flex-col gap-5 text-gray-700">
            <p>📧 larrahleezurita4@email.com</p>
            <p>📘 Facebook: Larrah Lee Imperio</p>
            <p>📞 +63 976 663 8389</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
