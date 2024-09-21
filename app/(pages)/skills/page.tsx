"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <section className="md:flex md:justify-between w-full min-h-screen dark:bg-gray-900 bg-white dark:text-white text-gray-900 md:mx-16 mx-4">
        <div className="md:w-1/2">
          <motion.img
            src="./images/skilled-person.jpg"
            alt="Developer at work"
            className="md:mt-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            width={600}
            height={400}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-16"
        >
          <h1 className="text-5xl">Experience</h1>
          <h2 className="text-2xl mt-4 text-justify">Work Experience</h2>
          <p className="mt-3 md:mr-32">
            With three years of hands-on experience working with both Angular
            and React frameworks at Perago Information Systems PLC, I have
            developed a strong foundation in building scalable, high-performance
            web applications. Throughout my time at Perago, I collaborated with
            cross-functional teams to deliver innovative solutions, leveraging
            my expertise in frontend development to solve complex challenges. My
            experience has honed my ability to create dynamic user interfaces
            and optimize code for efficiency, ensuring seamless user experiences
            across platforms.
          </p>
        </motion.div>
      </section>
      <div></div>
    </>
  );
};

export default Skills;
