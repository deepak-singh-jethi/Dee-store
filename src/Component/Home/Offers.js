import React from "react";
import OfferCard from "./OfferCard";
import { offerData } from "../../Store/data";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";

const Offers = () => {
  const renderOfferCards = () => {
    return Object.keys(offerData).map((category) => (
      <OfferCard
        key={category}
        title={offerData[category].title}
        description={offerData[category].description}
        image={offerData[category].imgUrl}
      />
    ));
  };

  return (
    <ScrollBottomToTop duration="3">
      <div className="container mx-auto o mt-24  p-3 bg-slate-800 rounded-xl lg:p-10">
        <h1 className="text-center text-4xl my-14 text-slate-200 ">Offers</h1>
        <div className="flex flex-wrap justify-center ">
          {renderOfferCards()}
        </div>
      </div>
    </ScrollBottomToTop>
  );
};

export default Offers;
