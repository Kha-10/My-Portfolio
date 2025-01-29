import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-6 relative bg-gray-100 dark:bg-gray-900"
    >
      <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6">
        <motion.a
          href="https://github.com/Kha-10"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          whileHover={{ scale: 1.1 }}
        >
          <Github size={24} />
        </motion.a>
        {/* <motion.a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Twitter size={24} />
        </motion.a> */}
        <motion.a
          href="https://www.linkedin.com/in/kyaw-htet-aung-21a401241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          whileHover={{ scale: 1.1 }}
        >
          <Linkedin size={24} />
        </motion.a>
        {/* <motion.a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Facebook size={24} />
        </motion.a> */}
      </div>
      <div className="max-w-6xl mx-auto pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8">
            <p className="font-mono text-gray-800 dark:text-white">
              Hi, my name is
            </p>

            <h1 className="text-7xl font-bold text-blue-400 mb-2">
              Kyaw Htet Aung.
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-700 dark:text-gray-300  leading-tight">
              I build scalable and efficient web applications with a strong
              <br className="hidden sm:block" />
              focus on performance and usability.
            </h2>

            <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-base md:text-lg">
              When I'm not coding, you can find me exploring new technologies or
              learning about the latest industry trends. I believe in continuous
              learning and always push myself to improve and stay up-to-date
              with advancements in the field.
            </p>

            <p className="text-blue-400 font-mono">
              Currently available for a job & freelance
            </p>
             {/* Mobile Social Icons */}
             <div className="flex md:hidden gap-6 pt-4">
              <motion.a
                href="https://github.com/Kha-10"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} />
              </motion.a>
              {/* <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={20} />
              </motion.a> */}
              <motion.a
                href="https://www.linkedin.com/in/kyaw-htet-aung-21a401241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} />
              </motion.a>
              {/* <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook size={20} />
              </motion.a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
