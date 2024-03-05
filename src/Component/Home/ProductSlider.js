import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ProductSlider = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (index === items.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(interval2);
  }, [index]);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { id, title, price, description, image, rating } = items[index];

  return (
    <AnimatePresence>
      <motion.div
        transition={{ staggerChildren: 0.8 }}
        className="relative w-full shadow-xl rounded-lg flex flex-col ">
        <motion.div
          key={id * 1345}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          exit={{ opacity: 0, x: -100 }}
          className="flex sm:flex-row flex-col sm:h-[430px] h-[500px] justify-center items-center">
          <div className="w-full sm:w-[50%] sm:h-[300px] h-[300px] object-cover">
            <img
              src={image}
              alt=""
              className="w-[100%] h-[100%] object-contain opacity-80"
            />
          </div>
          <div className="w-full sm:w-[50%] flex flex-col gap-6 justify-center items-center py-1 ">
            <h1 className="sm:text-2xl text:lg font-bold text-center">
              {title.substring(0, 40)}
            </h1>
            <p className="sm:text-lg text-center">
              {description.substring(0, 58)}
            </p>
            <p className="text-lg font-bold">Price: {price}</p>
          </div>
        </motion.div>
        <div className="flex justify-center items-center mb-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 bg-blue-600 mx-2 rounded-full cursor-pointer ${
                i === index ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setIndex(i)}></div>
          ))}
        </div>

        <button
          className=" absolute left-0 top-[50%] text-5xl text-blue-600"
          onClick={handlePrev}>
          &#9666;
        </button>
        <button
          className="absolute right-0 top-[50%] text-5xl text-blue-600"
          onClick={handleNext}>
          &#9656;
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductSlider;
