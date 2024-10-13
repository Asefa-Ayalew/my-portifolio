import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mantine/core";
const WhatIDo = () => {
  return (
    <>
      <h1 className="text-3xl dark:text-white text-gray-900 text-center md:ml-56 mb-8 font-black">
        Here is what I do
      </h1>
      <Box className="md:flex md:mx-16 mx-4">
        <Box className="md:w-1/2">
          {/* Image Animation (Optional) */}
          <motion.img
            src="./images/profile2.jpg" // Replace with your image
            alt="Developer at work"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
        </Box>
        <Box className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-900 dark:text-white text-justify"
          >
            <h1 className="text-2xl font-bold mb-4">Frontened Development.</h1>
            <ul className="list-disc list-inside mb-4">
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Building responsive website frontEnd using ReactJS |
                  nextjs/Angular | typescript/ javascript | Html | Css |
                  bootstrap| TailwindCss | Nodejs | NestJs{" "}
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Creating application backend in Nodejs | NestJs
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Creating Website Design Using Figma
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Creating responsive design using frontend frameworks like React and angular
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Developing System Requirement in diffrent diagrams Class
                  Diagram | ER Diagram |Activity Diagram{" "}
                </span>
              </li>
            </ul>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default WhatIDo;
