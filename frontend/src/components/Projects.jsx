import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "KantinPintar",
    desc: "Kantin Pintar adalah platform pemesanan makanan digital untuk lingkungan sekolah yang memudahkan siswa, guru, dan staf memesan makanan tanpa antre. Sistem ini mendukung layanan food delivery di luar sekolah, dilengkapi integrasi pembayaran otomatis menggunakan Stripe untuk transaksi yang cepat dan aman.",
    tech: [
      "MongoDB",
      "Express",
      "React.js",
      "Stripe",
      "Node.js",
      "CSS Vanilla",
    ],
    img: "/images/kantinpintar.png",
    link: "https://kantin-pintar-yvzg.vercel.app/",
  },
  {
    title: "Oxyvia Smart Energy System",
    desc: "Oxyvia adalah sistem berbasis IoT yang dirancang untuk memantau dan mengoptimalkan penggunaan energi listrik rumah tangga. Menggunakan Arduino sebagai pengumpul data, sistem ini menghitung total konsumsi listrik dan emisi karbon secara real-time untuk membantu pengguna meminimalisir dampak efek rumah kaca. Dibangun dengan React.js untuk tampilan interaktif, Laravel untuk manajemen data backend, serta Python.",
    tech: [
      "React.js",
      "Laravel",
      "Python",
      "Arduino",
      "Tailwind CSS",
      "IoT",
      "Energy Tracking",
    ],
    img: "/images/oxyvia.png",
    link: "",
  },
  {
    title: "OutGamble",
    desc: "Out Gamble hadir sebagai platform edukatif yang membantu pelajar dan masyarakat memahami bahaya judi online. Melalui informasi, tips, dan solusi digital yang interaktif, kami berkomitmen membangun generasi sadar dan bebas dari kecanduan judi.",
    tech: ["React.js", "Laravel", "Tailwind CSS"],
    img: "/images/OutGamble.png",
    link: "",
  },
  {
    title: "Web Sekolah SMKN 26 Jakarta",
    desc: "Website resmi SMKN 26 Jakarta yang menampilkan profil sekolah, visi misi, berita, serta informasi akademik secara interaktif dan responsif. Dibangun menggunakan React.js dan CSS Vanilla untuk tampilan yang ringan dan modern, serta MongoDB untuk pengelolaan data dinamis seperti berita dan pengumuman sekolah.",
    tech: ["React.js", "CSS Vanilla", "Express", "MongoDB"],
    img: "/images/smkn26.png",
    link: "",
  },
  {
    title: "Player Team Generator Web API",
    desc: "RESTful API untuk mengelola data pemain sepak bola dan membentuk tim secara otomatis berdasarkan posisi dan skill utama. Dibangun menggunakan Laravel dengan validasi data, autentikasi token, serta fitur CRUD dan algoritma seleksi tim.",
    tech: ["Laravel", "PHP", "MySQL", "REST API"],
    img: "",
    link: "https://github.com/HidayahMF/RestFullPlayerApi",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-20 bg-linear-to-b from-[#0f1624] to-[#1a2332] text-white"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12 text-green-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-16 w-full max-w-6xl">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`flex flex-col ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 md:gap-12 bg-gray-800/40 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-green-500/10 transition-all duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={p.img}
              alt={p.title}
              className="w-full md:w-1/2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 object-cover"
            />

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                {p.desc}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-green-500/10 text-green-400 border border-green-400/30 px-3 py-1 text-xs sm:text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md transition-all"
                >
                  <ExternalLink size={18} />
                  Visit Website
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 bg-gray-600 text-gray-300 text-sm sm:text-base font-semibold rounded-lg shadow-md cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
