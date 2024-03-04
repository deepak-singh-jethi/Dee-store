import { motion, AnimatePresence } from "framer-motion";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";
import { useState } from "react";

const skills = [
  {
    imgURL: "https://img.icons8.com/color/48/html-5--v1.png",
    name: "HTML5",
    rating: 10,
  },
  {
    imgURL: "https://img.icons8.com/color/48/css3.png",
    name: "CSS",
    rating: 8,
  },
  {
    imgURL:
      "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
    name: "JavaScript (ES6+)",
    rating: 9,
  },
  {
    imgURL: "https://img.icons8.com/plasticine/100/react.png",
    name: "React.js",
    rating: 9,
  },
  {
    imgURL: "https://img.icons8.com/ios/50/java-coffee-cup-logo--v1.png",
    name: "Java",
    rating: 7,
  },
  {
    imgURL: "https://img.icons8.com/material-sharp/24/mysql-logo.png",
    name: "MySQL",
    rating: 6,
  },
];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleHoverOver = (rating) => {
    setSelectedSkill(rating);
  };

  const handleHoverOut = () => {
    setSelectedSkill(null);
  };

  return (
    <AnimatePresence>
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
                whileHover={{ y: 4 }}
                transition={{ duration: 0.6 }}
                onHoverStart={() => {
                  handleHoverOver(skill.rating);
                }}
                onHoverEnd={handleHoverOut}>
                <img
                  className="h-[30px] w-[30px]"
                  src={skill.imgURL}
                  alt={skill.name}
                />

                <span className=" px-2 text-xl">{skill.name}</span>
              </motion.li>
            ))}
          </ul>

          <div className=" h-[15px] w-[100%] overflow-hidden rounded-lg">
            {selectedSkill && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative bg-red-300 h-[15px] w-[100%] rounded-lg">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute top-0 left-0  h-[15px] bg-gray-700 opacity-50 rounded-lg"
                  style={{
                    width: `${selectedSkill * 10}%`,
                  }}></motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </ScrollBottomToTop>
    </AnimatePresence>
  );
};
export default SkillsSection;
