import React from "react";
import ScrollFramer from "../../FramerAnimation/ScrollFramer";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col mb-4 md:mb-0 md:pr-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Shop Categories
          </h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                Clothing
              </p>
            </li>
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                Electronics
              </p>
            </li>
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                Home &amp; Living
              </p>
            </li>
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                Beauty &amp; Personal Care
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-4 md:mb-0 md:pr-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Customer Support
          </h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                Contact Us
              </p>
            </li>
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                Returns &amp; Exchanges
              </p>
            </li>
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                FAQs
              </p>
            </li>
            <li>
              <p href="#" className="hover:text-gray-400 text-sm md:text-base">
                Shipping Information
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            Stay up-to-date with our latest products and exclusive offers.
          </p>
          <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="Your email"
              className="w-full md:w-48 p-2 border-2 border-gray-600"
            />
            <button className="w-full md:w-32 lg:w-auto bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 w-full my-8"></div>
      <ScrollFramer>
        <p className="text-center text-sm md:text-base lg:text-lg">
          &copy; 2024 Dee-store Website. All rights reserved.
        </p>
      </ScrollFramer>
    </footer>
  );
};

export default Footer;
