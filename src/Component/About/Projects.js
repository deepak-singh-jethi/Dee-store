import { motion } from "framer-motion";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";
import image1 from "../../Store/Screenshot 2024-03-09 at 2.29.47 PM.png";
import image2 from "../../Store/Screenshot 2024-03-09 at 2.31.39 PM.png";
import image3 from "../../Store/Screenshot 2024-03-09 at 2.25.15 PM.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bloggers App",
      description:
        "A platform for bloggers to create, edit, and share their articles. Users can explore a variety of blog posts from different categories.",

      githubLink: "https://github.com/deepak-singh-jethi/bloggers-app",
      imageUrl: 1,
    },
    {
      title: "Quiz App",
      description:
        "An interactive quiz application that challenges users with a diverse range of questions across multiple categories. Track your score and compete with friends!",

      githubLink: "https://github.com/deepak-singh-jethi/d_quiz_application",
      imageUrl: 2,
    },
    {
      title: "Shopping website",
      description:
        "A modern and user-friendly e-commerce platform that provides a seamless shopping experience. Users can explore a wide range of products, add them to the cart, and securely complete the purchase.",

      githubLink: "https://github.com/deepak-singh-jethi/Dee-store",
      imageUrl: 3,
    },
  ];

  return (
    <ScrollBottomToTop>
      <div className="text-left border-2  rounded-lg p-8  bg-slate-900 shadow-xl">
        <h3 className="text-3xl font-bold mb-4 text-gray-100 text-center py-4 sm:py-8 font-mono">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 sm:pb-20 mx-auto">
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
                src={
                  project.imageUrl === 1
                    ? image1
                    : project.imageUrl === 2
                    ? image2
                    : image3
                }
                alt={`${project.title} Project`}
                className="w-full h-50 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2">{project.description}</p>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mb-2 block end-1">
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollBottomToTop>
  );
};

export default ProjectsSection;
