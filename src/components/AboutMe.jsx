import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function AboutMe() {
  return (
    <section id="about me" className="pt-24 pb-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profile}
              alt="Developer"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Hello! I'm a passionate full-stack developer with a love for
              creating elegant, efficient, and user-friendly web applications.
              With years of experience in both front-end and back-end
              technologies, I strive to build scalable and maintainable
              solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and community events. I believe in continuous
              learning and always push myself to stay up-to-date with the latest
              industry trends.
            </p>
            <motion.button
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/My resume.pdf"; // Hosted in public folder
                link.download = "KyawHtetAung_Resume.pdf"; // Suggested filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}