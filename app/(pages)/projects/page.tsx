"use client";
import React from "react";
import { motion } from "framer-motion";
// import CustomCard from "@/app/shared/ui/card/card";

const Skills = () => {
  const onCardClicked = () =>{
    console.log('card clicked');
    
  }
  return (
    <>
      <section className="md:flex md:justify-between w-full min-h-screen dark:bg-gray-900 bg-white dark:text-white text-gray-900 md:mx-16 mx-4">
        <div className="md:w-1/2">
          <motion.img
            src="./images/projects1.jpg"
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
          <h1 className="text-3xl">Projects</h1>
          <p className="mt-3 md:mr-32">
            My projects leverage a wide range of cutting-edge technologies, with
            a strong focus on web-based applications. I specialize in creating
            dynamic, high-performance solutions that prioritize both
            functionality and user experience. Below are some of the key
            projects I have worked on. Please note that not all of them are
            currently available on GitHub.
          </p>
        </motion.div>
      </section>
      <div>
        {/* <CustomCard 
        buttonText="fk"
        description="card description"
        onClick={onCardClicked}
        title="card title"
        /> */}
      </div>
    </>
  );
};

export default Skills;
