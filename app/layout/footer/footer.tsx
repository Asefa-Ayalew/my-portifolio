"use client"
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="dark:bg-gray-900 bg-white dark:text-white text-gray-900 flex justify-center pt-4 font-bold"
    >
      <p>&copy; 2024 Asefa Ayalew, Software developer.</p>
    </motion.div>
  );
};

export default Footer;
