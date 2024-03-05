import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SmallScreenFilter from "./SmallScreenFilter";
import LargeScreenFilter from "./LargeScreenFilter";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";
import { motion } from "framer-motion";

const Shop = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState({
    category: "All",
    price: 1,
    rating: "2.5",
  });

  useEffect(() => {
    if (!products) {
      return;
    }

    const filtered = products.filter((product) => {
      let flag = true;
      if (filter.category !== "All" && filter.category !== product.category) {
        return false;
      }

      if (filter.price !== 1 && product.price < filter.price) {
        return false;
      }
      if (filter.rating !== "2.5" && product.rating.rate < filter.rating) {
        return false;
      }
      return flag;
    });
    setFilteredProducts(filtered);
  }, [filter, products]);

  return (
    <main className="container p-2 lg:p-8  w-full">
      <SmallScreenFilter setFilter={setFilter} filter={filter} />
      <div
        className="flex mb-4 sm:pt-20  gap-4 pt- lg:pt-20 "
        style={{
          overflow: "hidden",
          height: "94vh",
        }}>
        <LargeScreenFilter setFilter={setFilter} filter={filter} />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 "
          style={{
            flex: 6,
            flexGrow: "grow",
            overflowY: "scroll",
          }}>
          {filteredProducts &&
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Shop;
