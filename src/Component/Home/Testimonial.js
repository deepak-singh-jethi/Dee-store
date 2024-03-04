import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { customerTestimonials } from "../../Store/data";

const starGenerator = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <svg
          className={`${i < rating ? "text-yellow-600" : "text-gray-800"}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
        </svg>
      </span>
    );
  }
  return stars;
};
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % customerTestimonials.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const nextLeft = () => {
    console.log(true);
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return customerTestimonials.length - 1;
      }
      return prevIndex - 1;
    });
  };
  const nextRight = () => {
    console.log(true);
    setIndex((prevIndex) => {
      if (prevIndex === customerTestimonials.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const { image, name, comment, rating } = customerTestimonials[index];

  return (
    <div
      className="container mx-auto  mt-14  p-3 bg-slate-50 rounded-xl lg:p-10 text-center mainBorderMaker"
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      }}>
      <div className="flex flex-col sm:flex-row px-4 py-4 h-fit">
        <div
          className="w-full sm:w-1/2 h-[400px] bg-sky-600 flex flex-col justify-center items-center relative"
          style={{
            borderRadius: "18% 82% 67% 33% / 50% 45% 55% 50%  ",
            backgroundColor: "rgba(100, 160, 50, 0.8)",
          }}>
          <span className="text-2xl font-extrabold px-40 ">
            What our customers are saying!
          </span>

          <div className="w-full flex justify-between px-4">
            <button className="text-5xl cursor-pointer " onClick={nextLeft}>
              &larr;
            </button>
            <button className="text-5xl cursor-pointer " onClick={nextRight}>
              &rarr;
            </button>
          </div>
        </div>
        <motion.div
          key={name}
          className="w-full mt-10 sm:m-0 sm:w-1/2 h-[430px] flex  flex-col gap-4 justify-center items-center p-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, x: 100 }}>
          <>
            <img
              src={image}
              alt=""
              className="w-[150px] h-[150px] rounded-full"
            />
            <p className="text-lg font-semibold ">{name}</p>
            <p className="text-sm   ">{comment}</p>
            <p className="flex ">{starGenerator(rating)}</p>
          </>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
