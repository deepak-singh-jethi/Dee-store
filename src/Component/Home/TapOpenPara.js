import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const paraVariants = {
  hidden: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0 },
};

const TapOpenPara = () => {
  const [isOpen, setIsOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleOpen = (index) => {
    const newIsOpen = { ...isOpen };
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="my-36">
      <div className="border-b-2 my-8 text-center ">
        <h1
          className="text-lg font-bold cursor-pointer hover:text-blue-500"
          onClick={() => handleOpen(1)}>
          Frequently Asked Questions
        </h1>
        <AnimatePresence>
          {isOpen[1] && (
            <motion.p
              key="faq"
              initial="hidden"
              animate="open"
              variants={paraVariants}
              transition={{ duration: 0.4 }}
              exit="hidden"
              className="my-4 text-gray-700">
              Q: How can I track my order?
              <br />
              A: You can track your order by logging into your account and
              visiting the Order History section.
              <br />
              Q: What payment methods do you accept?
              <br />
              A: We accept credit/debit cards, PayPal, and other secure payment
              methods during the checkout process.
              <br />
              Q: How do I return an item?
              <br />
              A: Please visit our Returns page for information on how to
              initiate a return.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="border-b-2 my-10 text-center">
        <h1
          className="text-lg font-bold cursor-pointer hover:text-blue-500"
          onClick={() => handleOpen(2)}>
          Contact us
        </h1>
        <AnimatePresence>
          {isOpen[2] && (
            <motion.p
              key="contact"
              initial="hidden"
              animate="open"
              variants={paraVariants}
              transition={{ duration: 0.4 }}
              exit="hidden"
              className="my-4 text-gray-700">
              For customer support, please email us at deepujethi@gmail.com or
              call us at +91-88659-19703.
              <br />
              Our business hours are Monday to Friday, 9:00 AM to 5:00 PM.
              <br />
              Feel free to reach out with any inquiries or feedback.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="border-b-2 my-10 text-center">
        <h1
          className="text-lg font-bold cursor-pointer hover:text-blue-500"
          onClick={() => handleOpen(3)}>
          About us
        </h1>
        <AnimatePresence>
          {isOpen[3] && (
            <motion.p
              key="info"
              initial="hidden"
              animate="open"
              variants={paraVariants}
              transition={{ duration: 0.4 }}
              exit="hidden"
              className="my-4 text-gray-700">
              We are a passionate team dedicated to providing high-quality
              products and excellent customer service.
              <br />
              Our commitment is to deliver a seamless online shopping experience
              with a wide range of products and reliable delivery services.
              <br />
              Learn more about our journey and mission on our About Us page.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="border-b-2 my-10 text-center">
        <h1
          className="text-lg font-bold cursor-pointer hover:text-blue-500"
          onClick={() => handleOpen(4)}>
          Privacy Policy
        </h1>
        <AnimatePresence>
          {isOpen[4] && (
            <motion.p
              key="privacy"
              initial="hidden"
              animate="open"
              variants={paraVariants}
              transition={{ duration: 0.4 }}
              exit="hidden"
              className="my-4 text-gray-700">
              Our Privacy Policy outlines how we collect, use, and protect your
              personal information.
              <br />
              We prioritize the security and confidentiality of your data.
              <br />
              Please review our Privacy Policy to understand our practices and
              how we respect your privacy.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TapOpenPara;
