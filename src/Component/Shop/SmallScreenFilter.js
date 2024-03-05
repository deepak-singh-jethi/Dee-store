import React, { useState } from "react";
import { useSelector } from "react-redux";
import { rating } from "../../Store/data";
import { AnimatePresence, motion } from "framer-motion";

const SmallScreenFilter = ({ setFilter, filter }) => {
  const { category } = useSelector((state) => state.category);
  const [isFilterOpen, setISFilterOpen] = useState(false);

  const [inputs, setInputs] = useState({
    price: filter.price || 1,
    rating: filter.rating || "2.5",
    category: filter.category || "All",
  });

  const toggleFilter = () => {
    setISFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? (checked ? value : "All") : value,
    }));
  };

  const handleSubmit = () => {
    setFilter({ ...inputs });
    setISFilterOpen(false);
  };

  const handleClear = () => {
    setInputs({
      price: 1,
      rating: "2.5",
      category: "All",
    });
  };

  return (
    <div className="relative block md:hidden mb-60">
      <div className="bg-white pb-1 rounded-md shadow-md fixed top-[62px] w-full text-center ">
        <input
          type="text"
          placeholder="Search products"
          className="w-4/5 p-2 mt-4 border border-gray-300 rounded outline-none focus:border-blue-500 h-[30px]"
        />
        <button
          onClick={toggleFilter}
          className="sm:mt-2 w-1/2 bg-blue-500 my-1 text-white px-3 py-1 rounded-full hover:bg-blue-600">
          {isFilterOpen ? "Hide Filters" : "Filters"}
        </button>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className="mt-4 text-start"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: -40 }}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categories
              </label>
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
                    <span className="ml-2">{item}</span>
                  </label>
                ))}
              </div>

              <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
                Rating
              </label>
              <div>
                {rating.map((item) => (
                  <label
                    className="inline-flex items-center mr-4"
                    key={item.value}>
                    <input
                      type="checkbox"
                      className="form-radio"
                      name="rating"
                      value={item.value}
                      checked={+inputs.rating === item.value}
                      onChange={handleFilterChange}
                    />
                    <span className="ml-2">{item.label}</span>
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
              </div>

              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                onClick={handleSubmit}>
                Apply
              </button>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                onClick={handleClear}>
                Clear
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SmallScreenFilter;
