import React from "react";
import { useSelector } from "react-redux";
import AutoSwiper from "../ui/AutoSwiper";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";
import Offers from "./Offers";
import Testimonial from "./Testimonial";

const Home = () => {
  const user = useSelector((state) => state.user);
  const { category, statusOfAction } = useSelector((state) => state.category);
  const { headingProducts, statusOfLoading } = useSelector(
    (state) => state.headingProducts
  );

  console.log(category);

  return (
    <main className="mx-3 sm:mx-10 lg:mx-12 xl:mx-24  sm:my-20 my-14">
      <article className="my-6 mx-auto shadow-xl text-center w-full sm:w-2/3  ">
        <ScrollBottomToTop>
          <h2 className="text-center mt-6 text-3xl font-extrabold">
            Latest Collection
          </h2>
          {statusOfLoading.status === "loading" && (
            <h1 className="text-center w-full text-3xl">
              {statusOfLoading.status}
            </h1>
          )}
          <AutoSwiper items={headingProducts}></AutoSwiper>
        </ScrollBottomToTop>
      </article>
      <Offers />
      <ScrollBottomToTop duration="1">
        <div className="my-6 mx-auto shadow-xl text-center w-full sm:w-2/3  h-2 bg-black" />
      </ScrollBottomToTop>
      <ScrollBottomToTop duration="1">
        <Testimonial />
      </ScrollBottomToTop>
    </main>
  );
};

export default Home;
