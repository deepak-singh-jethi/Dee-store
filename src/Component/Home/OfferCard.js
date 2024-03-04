// OfferCard.js
import React from "react";
import { motion } from "framer-motion";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";

const OfferCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="flex flex-col items-center min-w-[280px] max-w-[320px] h-[450px] mx-auto overflow-hidden rounded-lg shadow-lg my-4  offer-card bg-slate-200"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ backgroundColor: "Highlight" }}>
      <img className="w-full h-48 object-cover mb-4" src={image} alt="Offer" />
      <div className="p-4">
        <div className="font-bold text-xl mb-2 sm:text-xl md:text-3xl font-serif">
          {title}
        </div>
        <p className="text-gray-700 text-base sm:text-sm md:text-lg font-serif">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default OfferCard;
