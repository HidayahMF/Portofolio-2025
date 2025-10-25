import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, X } from "lucide-react";

const About = () => {
  const roles = ["Frontend", "Backend"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = isDeleting ? 100 : 150;

    const typeEffect = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typeEffect);
  }, [displayText, isDeleting, index]);

 
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsModalOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-gradient-to-b from-[#0f1624] to-[#1a2332] text-white">
 
      <motion.img
        src="/images/profile.jpg"
        alt="profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mb-6 border-4 border-green-400 shadow-lg object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

  
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight"
      >
        Hi, I’m{" "}
        <span className="text-green-400">Hidayah Muhammad Fadillah</span>
      </motion.h1>

      <motion.p
        className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-6 px-2 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’m a{" "}
        <span className="text-green-400 font-semibold">
          Junior{" "}
          <span>
            {displayText}
            <span className="border-r-2 border-green-400 ml-1 animate-pulse"></span>
          </span>{" "}
          Developer
        </span>{" "}
        who loves building seamless, scalable, and efficient web solutions. I specialize in crafting modern user interfaces and developing robust APIs that deliver great user experiences.

I love learning new things and trying new challenges — exploring technology is truly fun for me. I’m always eager to grow, improve my skills step by step, and contribute to creating meaningful digital innovations.
      </motion.p>

      <motion.div
        className="flex space-x-4 sm:space-x-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="https://github.com/hidayahmf/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 rounded-full bg-[#1f2937] hover:bg-green-500 transition-all duration-300"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/hidayah-muhammad-fadillah-89695b384/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 rounded-full bg-[#1f2937] hover:bg-green-500 transition-all duration-300"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://www.instagram.com/hdyhmfdlh/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 rounded-full bg-[#1f2937] hover:bg-green-500 transition-all duration-300"
        >
          <Instagram size={22} />
        </a>
      </motion.div>

      <motion.a
        href={`/images/cv_hidayah.pdf`}
        download="cv_hidayah.pdf"
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition-all mb-12"
        whileHover={{ scale: 1.05 }}
      >
        Download CV
      </motion.a>

      <motion.div
        className="w-full max-w-xl bg-[#1f2937] rounded-2xl p-6 shadow-lg border border-green-500/40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">
          🏆 Certification
        </h2>
        <div className="bg-[#111827] rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-left">
          <motion.img
            src="/images/toeic.jpg"
            alt="TOEIC Certificate"
            className="w-32 sm:w-36 rounded-lg shadow-md mb-4 sm:mb-0 border border-green-400/50 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setIsModalOpen(true)} 
          />
          <div>
            <h3 className="text-lg font-semibold text-white">
              TOEIC® Certificate
            </h3>
            <p className="text-gray-400 text-sm">
              Score:{" "}
              <span className="text-green-400 font-medium">770 / 990</span>
            </p>
            <p className="text-gray-400 text-sm">Issued by ETS Global - 2025</p>
          </div>
        </div>
      </motion.div>


      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/toeic.jpg"
                alt="TOEIC Certificate Enlarged"
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-green-400/60"
              />
              <button
                className="absolute top-3 right-3 bg-black/60 hover:bg-red-500 text-white rounded-full p-2"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
