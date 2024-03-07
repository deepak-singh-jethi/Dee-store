import React, { useState } from "react";
import { useSelector } from "react-redux";
import { rating } from "../../Store/data";
import { motion } from "framer-motion";

const LargeScreenFilter = ({ setFilter, filter, setSearchInput }) => {
  const { category } = useSelector((state) => state.category);

  const [inputs, setInputs] = useState({
    price: filter.price || 1,
    rating: filter.rating || "2.5",
    category: filter.category || "All",
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? (checked ? value : "All") : value,
    }));
  };

  const handleSubmit = () => {
    setFilter({ ...inputs });
  };

  const handleClear = () => {
    setInputs({
      price: 1,
      rating: "2.5",
      category: "All",
    });
    setFilter((prev) => {
      return {
        ...prev,
        price: 1,
        rating: "2.5",
        category: "All",
      };
    });
  };

  const handleUserSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <motion.div
      className="sm:block hidden relative"
      style={{
        flex: 2,
        overflowY: "auto",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <div className="bg-white lg:px-8 sm:px-4">
        <input
          type="text"
          placeholder="Search products"
          onChange={handleUserSearchInput}
          className="w-full p-2 border border-gray-300 rounded outline-none focus:border-blue-500"
        />
        <div className="mt-4">
          <h2 className="block text-[15px] font-medium text-gray-700 mb-2">
            Categories
          </h2>
          <div>
            {category.map((item) => (
              <label className="inline-flex items-center mr-4" key={item}>
                <input
                  type="checkbox"
                  className="form-checkbox"
                  value={item}
                  name="category"
                  checked={inputs.category === item}
                  onChange={handleFilterChange}
                />
                <span className="ml-2 text-[14px]">{item}</span>
              </label>
            ))}
          </div>
          <h3 className="block text-[15px] font-medium text-gray-700 mt-4 mb-2">
            Rating
          </h3>
          <div>
            {rating.map((item) => (
              <label className="inline-flex items-center mr-4" key={item.value}>
                <input
                  type="checkbox"
                  className="form-radio"
                  name="rating"
                  value={item.value}
                  checked={+inputs.rating === item.value}
                  onChange={handleFilterChange}
                />
                <span className="ml-2 text-[14px]">{item.label}</span>
              </label>
            ))}
          </div>
          <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
            Price Range
          </label>
          <div>
            <input
              type="range"
              placeholder="Min"
              min="1"
              max="1000"
              value={inputs.price}
              className="w-1/2 p-2 border border-gray-300 rounded outline-none focus:border-blue-500 mr-2"
              name="price"
              onChange={handleFilterChange}
            />
            <span className="text-center">{inputs.price}</span>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 mr-5 rounded-full hover:bg-blue-600 text-[14px]"
            onClick={handleSubmit}>
            Apply
          </button>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-[14px]"
            onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LargeScreenFilter;
