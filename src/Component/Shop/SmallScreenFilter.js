import React, { useState } from "react";
import { useSelector } from "react-redux";
import { rating } from "../../Store/data";
import { AnimatePresence, motion } from "framer-motion";

const SmallScreenFilter = ({ setFilter, filter, setSearchInput }) => {
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
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="relative block md:hidden mb-4">
      <div className="bg-white pb-1 pt-2 rounded-md shadow-md fixed top-[45px] w-full text-center z-[10]">
        <input
          type="text"
          placeholder="Search products"
          className="w-4/5 p-2  border border-gray-300 rounded outline-none focus:border-blue-500 h-[14px]"
          onChange={handleSearch}
        />
        <button
          onClick={toggleFilter}
          className="w-1/2 bg-blue-500 my-1 text-white px-3 py-2 rounded-full hover:bg-blue-600 h-[24px] text-[10px] ">
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
              <label className="block text-[11px] font-medium text-gray-700 mb-1">
                Categories
              </label>
              <div>
                {category.map((item) => (
                  <label
                    className="inline-flex items-center mr-4 text-[11px]"
                    key={item}>
                    <input
                      type="checkbox"
                      className="form-checkbox text-[11px]"
                      value={item}
                      name="category"
                      checked={inputs.category === item}
                      onChange={handleFilterChange}
                    />
                    <span className="ml-2 text-[11px]">{item}</span>
                  </label>
                ))}
              </div>
              <label className="block text-sm font-medium text-gray-700 mt-4 mb-1 text-[11px]">
                Rating
              </label>
              <div>
                {rating.map((item) => (
                  <label
                    className="inline-flex items-center mr-4 text-[11px]"
                    key={item.value}>
                    <input
                      type="checkbox"
                      className="form-radio text-[11px]"
                      name="rating"
                      value={item.value}
                      checked={+inputs.rating === item.value}
                      onChange={handleFilterChange}
                    />
                    <span className="ml-2 text-[11px]">{item.label}</span>
                  </label>
                ))}
              </div>
              <label className="block font-medium text-gray-700 mt-4 mb-1 text-[11px]">
                Price Range
              </label>
              <div>
                <input
                  type="range"
                  placeholder="Min"
                  min="1"
                  max="1000"
                  value={inputs.price}
                  className="w-1/2 p-2 border border-gray-300 rounded outline-none focus:border-blue-500 mr-2 text-[11px]"
                  name="price"
                  onChange={handleFilterChange}
                />
              </div>
              <button
                className="mt-4 bg-blue-500 text-white px-3 py-1 rounded-full text-[11px] hover:bg-blue-600 mr-10"
                onClick={handleSubmit}>
                Apply
              </button>
              <button
                className="mt-4 bg-blue-500 text-white px-3 py-1 rounded-full text-[11px] hover:bg-blue-600"
                onClick={handleClear}>
                clear
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SmallScreenFilter;
