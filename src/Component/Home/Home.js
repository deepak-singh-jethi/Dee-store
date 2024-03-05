import React from "react";
import { useSelector } from "react-redux";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";
import Offers from "./Offers";
import Testimonial from "./Testimonial";
import TapOpenPara from "./TapOpenPara";
import { AnimatePresence } from "framer-motion";
import ProductSlider from "./ProductSlider";

const Home = () => {
  const user = useSelector((state) => state.user);
  const { category, statusOfAction } = useSelector((state) => state.category);
  const { headingProducts, statusOfLoading } = useSelector(
    (state) => state.headingProducts
  );

  return (
    <main className="mx-3 sm:mx-10 lg:mx-12 xl:mx-24 sm:my-14 my-4 ">
      <ScrollBottomToTop>
        <h2 className="text-center sm:my-14 my-6 text-3xl sm:text-5xl font-extrabold pt-24">
          Latest Collection
        </h2>
        {statusOfLoading.status === "loading" && (
          <h1 className="text-center w-full text-3xl">
            {statusOfLoading.status}
          </h1>
        )}
        {headingProducts.length > 0 && (
          <ProductSlider items={headingProducts} />
        )}
      </ScrollBottomToTop>

      <Offers />

      <ScrollBottomToTop duration="2">
        <h1 className="text-4xl font-bold mt-10 lg:mt-32 st:my-14 text-center">
          Testimonial
        </h1>
      </ScrollBottomToTop>
      <ScrollBottomToTop duration="0.5">
        <Testimonial />
      </ScrollBottomToTop>

      <ScrollBottomToTop duration="2">
        <TapOpenPara />
      </ScrollBottomToTop>
    </main>
  );
};

export default Home;
