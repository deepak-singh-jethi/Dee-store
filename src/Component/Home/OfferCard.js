// OfferCard.js
import React from "react";
import { motion } from "framer-motion";

const OfferCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="flex flex-col items-center min-w-[280px] max-w-[320px] h-[420px] sm:h-[450px] mx-auto overflow-hidden rounded-lg  my-5 sm:my-10  offer-card bg-slate-200"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ backgroundColor: "cornsilk" }}
      style={{
        boxShadow: "4px 4px 10px rgba(200, 256, 256, 0.1)",
      }}>
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
