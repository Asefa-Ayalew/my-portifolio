import React from "react";
import { motion } from "framer-motion";
const WhatIDo = () => {
  return (
    <div className="md:flex md:mx-16 mx-4">
      <div className="w-1/2">
        {/* Image Animation (Optional) */}
        <motion.img
          src="./images/profile2.jpg" // Replace with your image
          alt="Developer at work"
          className="mt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
      <div className="w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-900 dark:text-white text-justify"
        >
          <h1 className="text-5xl font-bold mb-4">
            Frontened Development.
          </h1>
          <p className="text-2xl  font-semibold mb-4">
            ⚡ Building responsive website frontEnd using ReactJS | nextjs/Angular |
            typescript/ javascript | Html | Css | bootstrap| TailwindCss | Php ⚡ Developing <br />
            mobile applications using ReactNative ⚡ Creating application<br />
            backend in Mysql ⚡ Creating Website Design Using Figma ⚡ Creating<br />
            application backend in Mysql ⚡ Developing System Requirement in<br />
            diffrent diagrams ClassDiagram | ER Diagram |Activity Diagram
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIDo;
