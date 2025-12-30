import { Outlet } from "react-router-dom";
import { FaPython, FaNetworkWired, FaShieldAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

/* animations */
const heroImg = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

const heroText = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.1 } },
};

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const chip = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-900/40">
      {/* glow circles */}
      <div className="absolute top-[-40px] left-[-40px] w-64 h-64 bg-blue-500 opacity-55 rounded-full blur-3xl" />
      <div className="absolute bottom-[-40px] right-[-40px] w-96 h-96 bg-blue-500 opacity-55 rounded-full blur-3xl" />

      {/* hero content */}
      <div className="min-h-screen flex flex-col items-center justify-start pt-24 gap-2">
        <motion.img
          src="IMG_4678 2.JPG"
          alt="My picture"
          className="w-60 h-auto -mt-10"
          variants={heroImg}
          initial="hidden"
          animate="show"
        />

        <motion.div
          className="text-center max-w-2xl px-4 mt-12"
          variants={heroText}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl font-bold">Ksenija Rubež</h1>

          <p className="mt-6 text-xl text-slate-200 leading-relaxed">
            Welcome! 👋🏻 My name is Ksenija and I am 
            currently pursuing a Bachelor of Science in Cybersecurity at Grand Valley State University.

          </p>

          {/* skills */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-2 text-base"
            variants={wrap}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={chip} className="flex items-center px-4 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
              <FaPython className="w-4 mr-2 text-blue-300" />
              Python
            </motion.span>

            <motion.span variants={chip} className="flex items-center px-4 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
              <FaNetworkWired className="w-4 mr-2 text-blue-300" />
              Network Security
            </motion.span>

            <motion.span variants={chip} className="flex items-center px-4 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
              <FaShieldAlt className="w-4 mr-2 text-blue-300" />
              Ethical Hacking
            </motion.span>

            <motion.span variants={chip} className="flex items-center px-4 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
              <FaCode className="w-4 mr-2 text-blue-300" />
              Scripting
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
