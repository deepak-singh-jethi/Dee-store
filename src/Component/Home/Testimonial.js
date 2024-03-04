import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { customerTestimonials } from "../../Store/data";

const starGenerator = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <svg
          class={`${i < rating ? "text-yellow-600" : "text-gray-800"}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
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
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return customerTestimonials.length - 1;
      }
      return prevIndex - 1;
    });
  };
  const nextRight = () => {
    setIndex((prevIndex) => {
      if (prevIndex === customerTestimonials.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const { image, name, comment, rating } = customerTestimonials[index];

  return (
    <div className="container mx-auto  mt-24  p-3 bg-slate-50 rounded-xl lg:p-10 text-center">
      <h1 className="text-3xl font-bold my-14">Testimonial</h1>
      <div className="flex flex-col sm:flex-row px-4 py-4 h-fit">
        <div className="w-full sm:w-1/2 h-[400px] bg-sky-600 flex justify-center items-center relative">
          <span className="text-2xl font-extrabold px-40 ">
            What our customers are saying!
          </span>
          <p
            style={{
              position: "absolute",
              bottom: "0",
              left: "50px",
            }}>
            <button className="text-5xl" onClick={nextLeft}>
              &larr;
            </button>
          </p>
          <p
            style={{
              position: "absolute",
              bottom: "0",
              right: "50px",
            }}>
            <button className="text-5xl" onClick={nextRight}>
              &rarr;
            </button>
          </p>
        </div>
        <motion.div
          key={name}
          className="w-full sm:w-1/2 h-[400px] flex  flex-col gap-4 justify-center items-center p-8"
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
