import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SmallScreenFilter from "./SmallScreenFilter";
import LargeScreenFilter from "./LargeScreenFilter";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import AuthForm from "../Modal/AuthForm";

const Shop = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState({
    category: "All",
    price: 1,
    rating: "2.5",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loginInfo } = useSelector((state) => state.user);
  const isLoggedIn = loginInfo.isLoggedIn;

  useEffect(() => {
    if (isLoggedIn) {
      setIsModalOpen(false);
    }
  }, [isLoggedIn]);

  const handleModal = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  };

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
    const finalFilteredProducts = filtered.filter((product) => {
      return product.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFilteredProducts(finalFilteredProducts);
  }, [filter, products, searchInput]);

  console.log(isLoggedIn);

  return (
    <>
      <AuthForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}></AuthForm>
      <main className="container p-2  w-full mx-auto  ">
        <SmallScreenFilter
          setFilter={setFilter}
          filter={filter}
          setSearchInput={setSearchInput}
        />
        <div className="flex flex-col sm:flex-row mb-4 sm:pt-20 pt-lg:pt-20  h-full sm:justify-around w-[100%]">
          <LargeScreenFilter
            setFilter={setFilter}
            filter={filter}
            setSearchInput={setSearchInput}
          />
          <motion.div
            key="productContainer"
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 flex-grow w-full sm:w-2/3 sm:m-0 mt-24 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {filteredProducts &&
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleModal={handleModal}
                  isLoggedIn={isLoggedIn}
                />
              ))}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Shop;
