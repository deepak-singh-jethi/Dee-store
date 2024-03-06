import React, { useState } from "react";
import Modal from "./Modal";
import SignUpForm from "../User/SignUpForm";
import LoginForm from "../User/LoginForm";
import { motion } from "framer-motion";

const AuthForm = ({ setIsModalOpen, isModalOpen }) => {
  const [authStatus, setAuthStatus] = useState("login");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeAuthStatus = () => {
    setAuthStatus((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className=" md:w-[600px] md:h-[600px] flex flex-col 
      justify-center items-center  border border-gray-300 bg-white rounded-md p-8 ">
        <h1 className="font-extrabold text-2xl text-gray-800 mb-4 authForm text-center">
          {authStatus === "login" ? "Login" : "Sign Up"}
        </h1>

        {authStatus === "login" && (
          <LoginForm closeModal={closeModal}></LoginForm>
        )}
        {authStatus === "signup" && (
          <SignUpForm changeAuthStatus={changeAuthStatus}></SignUpForm>
        )}

        {/* changing the authStatus */}
        <p className="mt-4 text-gray-600">
          {authStatus === "login" ? (
            <>
              Don't have an account yet?
              <button className="text-blue-500 ml-1" onClick={changeAuthStatus}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button className="text-blue-500 ml-1" onClick={changeAuthStatus}>
                Login
              </button>
            </>
          )}
        </p>
      </motion.div>
      {/* closing the modal */}
      <div className="text-center p-4">
        <button
          className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default AuthForm;
