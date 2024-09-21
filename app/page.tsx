"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactMe from "./components/contact-me";
import WhatIDo from "./components/what-i-do";

const Home = () => {
  return (
    <>
      <section className="md:flex md:justify-between w-full min-h-screen dark:bg-gray-900 bg-white text-white md:mx-16 ">
        <ContactMe />
        <div className="w-1/2">
          {/* Image Animation (Optional) */}
          <motion.img
            src="./images/profile1.jpg" // Replace with your image
            alt="Developer at work"
            className="mt-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
        </div>
      </section>
      <WhatIDo />
    </>
  );
};

export default Home;
