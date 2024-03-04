import { motion } from "framer-motion";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      details:
        "Built with React and Node.js, utilizing MongoDB for the database.",
      githubLink: "https://github.com/yourusername/project1",
      imageUrl: "https://via.placeholder.com/400x400",
    },
    {
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      details:
        "Implemented using Vue.js with a serverless architecture on AWS.",
      githubLink: "https://github.com/yourusername/project2",
      imageUrl: "https://via.placeholder.com/400x400",
    },
    {
      title: "Project 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      details: "Full-stack application built with Angular, Express, and MySQL.",
      githubLink: "https://github.com/yourusername/project3",
      imageUrl: "https://via.placeholder.com/400x400",
    },
  ];

  return (
    <ScrollBottomToTop>
      <div className="text-left border-2  rounded-lg p-8  bg-slate-900 shadow-xl">
        <h3 className="text-3xl font-bold mb-4 text-gray-100 text-center py-4 sm:py-8 font-mono">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 sm:pb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white p-6 rounded-md shadow-md "
              whileHover={{
                scale: 1.01,
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3, delay: "0.09" }}>
              <img
                src={project.imageUrl}
                alt={`${project.title} Project`}
                className="w-full h-50 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-gray-700 mb-4">{project.details}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mb-2 block">
                View on GitHub
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollBottomToTop>
  );
};

export default ProjectsSection;
