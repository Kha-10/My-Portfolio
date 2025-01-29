import { motion } from "framer-motion";

const experiences = [
  //   {
  //     id: 1,
  //     title: "Senior Frontend Developer",
  //     company: "Tech Corp",
  //     period: "2021 - Present",
  //     description: [
  //       "Led a team of developers in creating responsive and accessible web applications using React and Next.js.",
  //       "Implemented state management solutions using Redux and Context API, improving application performance and maintainability.",
  //       "Mentored junior developers and conducted code reviews to ensure high-quality code standards.",
  //     ],
  //   },
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Story Appetizers",
    period: "21/6/2024 – 21/12/2024",
    description: [
      "Developed and maintained full-stack applications using Node.js, Express, and React.",
      "Designed and implemented RESTful APIs, improving data flow between front-end and back-end systems.",
      "Developed a Shop Admin Panel to enable shop administrators to manage key business operations effectively.",
      "CRUD Products : Added functionality for creating ,updating, managing product listings with image storing using AWS S3.",
      "Order Management : Streamlined order tracking and editing, including payment statuses and delivery information updates.",
      "Analytics : Integrated charts to display income and outcome trends, providing actionable insights for decision making.",
      "Designed the applications using MERN stack with a focus on responsiveness and scalability.",
      "Implemented secure image uploads to AWS S3, optimizing storage and retrieval performance.",
      "Collaborated with stakeholders to ensure alignment with business needs and continuously improved the platform based on user feedback.",
      "Ensured a seamless user experience by implementing intuitive interfaces and efficient backend workflows.",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "Taqwa Solutions",
    period: "20/11/2022 – 20/2/2023",
    description: [
      "Designed a School Management interface, ensuring an intuitive and user-friendly experience for school administrators.",
      "Developed features for administrators to set recurring schedules for school fees, streamlining financial processes.",
      "Conducted user research and usability testing to understand user needs and improve design workflows.",
      "Created wireframes, prototypes, and high-fidelity mockups to visualize the platform’s functionality and aesthetics.",
      "Focused on accessibility and visual hierarchy to enhance usability for a diverse user base."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          My Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
