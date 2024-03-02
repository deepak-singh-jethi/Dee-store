import React from "react";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./Projects";

const AnimatedButton = ({ text, onClick }) => {
  return (
    <motion.button
      className="bg-blue-500 text-white py-2 px-4 rounded-full mx-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}>
      {text}
    </motion.button>
  );
};

const AboutMePage = () => {
  const handleDownloadCV = () => {
    // Handle download CV logic
    console.log("Downloading CV...");
  };

  const handleContactInfo = () => {
    // Handle contact info logic
    console.log("Contact info clicked...");
  };

  return (
    <motion.div
      className="flex flex-col bg-gray-100 shadow-md rounded-md p-4 sm:p-8 mx-2 sm:mx-4 sm:my-8 my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Header Section */}
      <motion.div
        className="w-full bg-red-500 p-4 rounded-md mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <h1 className="text-4xl font-bold text-white text-center">About Me</h1>
      </motion.div>

      <div className="text-center sm:px-14  sm:py-20">
        {/* Profile Section */}
        <ScrollBottomToTop>
          <motion.div
            className="w-[150px] h-[150px] bg-gray-500 rounded-full mb-4 mx-auto overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </ScrollBottomToTop>

        <ScrollBottomToTop>
          <div className="text-center my-8">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-mono">
              Hi, I'm Deepak Singh Jethi
            </h2>
            <p className="text-xl text-gray-800 leading-6 text-bold font-mono">
              Frontend Developer passionate about crafting elegant solutions for
              users. Let's build something incredible together.
            </p>
          </div>
        </ScrollBottomToTop>

        {/* About Me Text */}
        <ScrollBottomToTop>
          <p className="text-slate-600 mb-14 text-base font-mono">
            I am a passionate and skilled frontend developer with a focus on
            creating delightful and user-friendly web experiences. My expertise
            lies in translating design concepts into responsive and interactive
            interfaces.
          </p>
        </ScrollBottomToTop>

        <ScrollBottomToTop duration="2">
          <div className="flex justify-center mt-10">
            <AnimatedButton text="Download CV" onClick={handleDownloadCV} />
            <AnimatedButton text="Contact Info" onClick={handleContactInfo} />
          </div>
        </ScrollBottomToTop>

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Buttons Section */}
      </div>
    </motion.div>
  );
};

export default AboutMePage;
