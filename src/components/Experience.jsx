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
    company: "Nexora Digital",
    period: "Jun 2024 – Sep 2025",
    description: [
      "Reduced API response times by 81% (800ms → 150ms) through Redis caching strategy, decreasing database queries by 70%",
      "Built secure REST APIs with rate limiting, comprehensive input validation, and ACID-compliant transactions for order/payment consistency",
      "Created responsive admin dashboard using React 18, TypeScript, and Tailwind CSS, increasing mobile usage by 150%",
      "Implemented Redis-based idempotency to prevent duplicate orders in high-traffic scenarios, eliminating potential revenue loss",
      "Optimized frontend data fetching with React Query and Redux Toolkit, reducing API calls by 40%",
      "Integrated AWS S3 + CloudFront CDN for scalable global media delivery with low-latency access",
      "Built flexible form system with dynamic validation, multi-step flows, and complex field types using React Hook Form and Zod",
      "Developed real-time order status updates using WebSocket technology for instant communication",
      "Implemented drag-and-drop interfaces for category management and advanced data tables with filtering, sorting, and bulk operations",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "Taqwa Solutions",
    period: "Oct 2022 – Feb 2023",
    description: [
      "Redesigned the onboarding flow to streamline setup for school staff and parents,reducing friction and setup time",
      "Collaborated with product managers, developers, and designers to align user goals with system functionality",
      "Conducted user interviews with school administrators, finance staff, and educators to map current registration and fee workflows, shaping the new experience",
      "Designed and tested intuitive dashboards for tracking fee payments, dues, and receipts across user roles",
      "Created interactive prototypes and usability tests to validate the fee management flow and improve user confidence",
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
