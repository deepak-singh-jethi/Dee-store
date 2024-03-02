import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ScrollBottomToTop({ children, duration = 0.8 }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration, delay: 0.2 }}>
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollBottomToTop;
