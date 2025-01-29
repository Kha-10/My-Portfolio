import { motion } from "framer-motion"

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of Project 1" },
  { id: 2, title: "Project 2", description: "A brief description of Project 2" },
  { id: 3, title: "Project 3", description: "A brief description of Project 3" },
]

export default function Projects() {
  return (
    <section id="projects" className="pt-24 pb-20 py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* <Image
                src={`/placeholder.svg?height=200&width=400&text=${project.title}`}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <motion.button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}