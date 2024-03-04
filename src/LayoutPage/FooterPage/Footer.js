import React from "react";
import Footer from "../../Component/footer/Footer";

import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";

function FooterLayout() {
  return (
    <div className="mt-14">
      <ScrollBottomToTop>
        <Footer>FooterLayout</Footer>
      </ScrollBottomToTop>
    </div>
  );
}

export default FooterLayout;
