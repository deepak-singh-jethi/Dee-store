import { motion } from "framer-motion";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";

const skills = [
  {
    imgURL: "https://img.icons8.com/color/48/html-5--v1.png",
    name: "HTML5",
  },
  {
    imgURL: "https://img.icons8.com/color/48/css3.png",
    name: "CSS",
  },
  {
    imgURL:
      "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
    name: "JavaScript (ES6+)",
  },
  {
    imgURL: "https://img.icons8.com/plasticine/100/react.png",
    name: "React.js",
  },
  {
    imgURL: "https://img.icons8.com/ios/50/java-coffee-cup-logo--v1.png",
    name: "Java",
  },
  {
    imgURL: "https://img.icons8.com/material-sharp/24/mysql-logo.png",
    name: "MySQL",
  },
];

const SkillsSection = () => {
  return (
    <ScrollBottomToTop duration="2">
      <div className="my-20 border-2  rounded-lg shadow-lg px-3 sm:px-14 py-8 sm:py-20">
        <h3 className="text-3xl font-bold mb-10 text-gray-800 text-center font-mono ">
          My Skills
        </h3>
        <ul className="list-none flex  flex-wrap justify-around mb-8 items-center gap-8">
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              className="flex items-center mb-2"
              initial={{ y: 0 }}
              whileHover={{ y: -20 }} // Control movement of the span
              transition={{ duration: 0.6 }}>
              <img
                className="h-[30px] w-[30px]"
                src={skill.imgURL}
                alt={skill.name}
              />

              <span className=" px-2 text-xl">{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </ScrollBottomToTop>
  );
};
export default SkillsSection;
