import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f1624] to-[#1a2332] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Judul */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        {/* Deskripsi singkat */}
        <motion.p
          className="text-gray-400 max-w-2xl leading-relaxed text-sm sm:text-base px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’m{" "}
          <span className="text-green-400 font-semibold">open to work</span> — whether
          it’s a freelance project, collaboration, or full-time opportunity. Feel free
          to reach out and let’s build something impactful together!
        </motion.p>

        {/* Info Kontak */}
        <motion.div
          className="flex flex-col sm:flex-wrap sm:flex-row sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0 mt-6 text-gray-300 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Email */}
          <div className="flex items-center justify-center space-x-2">
            <Mail className="text-green-400" size={20} />
            <a
              href="mailto:hidayahmfadillah@gmail.com"
              className="hover:text-green-400 transition-colors text-sm sm:text-base"
            >
              hidayahmfadillah@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-2">
            <Phone className="text-green-400" size={20} />
            <span className="text-sm sm:text-base">+62 821-2563-0770</span>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center space-x-2">
            <Briefcase className="text-green-400" size={20} />
            <span className="text-sm sm:text-base">Open to Work</span>
          </div>

          {/* Lokasi (opsional, bisa dihapus kalau tidak mau) */}
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="text-green-400" size={20} />
            <span className="text-sm sm:text-base">Jakarta, Indonesia</span>
          </div>
        </motion.div>

        {/* Tombol Kirim Pesan */}
        <motion.a
          href="mailto:hidayahmfadillah@gmail.com"
          className="mt-8 inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition-all text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.a>

        {/* Garis bawah + hak cipta */}
        <motion.div
          className="border-t border-gray-700 mt-10 pt-6 text-gray-500 text-xs sm:text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Hidayah Muhammad Fadillah — All Rights Reserved
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
