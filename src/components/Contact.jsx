import { motion } from "framer-motion";

export default function Contact() {
    
  return (
    <section id="contact" className="pt-24 pb-20 py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Get in Touch
        </h2>
        <motion.form
          action="https://getform.io/f/bpjjwzlb"
          method="POST"
          className="max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 dark:text-white border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 dark:text-white border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              //   value={message}
              //   onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 dark:text-white border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700"
              rows={4}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}