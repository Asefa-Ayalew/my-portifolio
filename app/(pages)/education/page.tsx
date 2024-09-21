"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
const Education = () => {
  return (
    <>
      <div className="md:flex md:mx-16 mx-4">
        <div className="md:w-1/2">
          {/* Image Animation (Optional) */}
          <motion.img
            src="./images/profile3.jpg"
            width={400}
            height={400}
            alt="Developer at work"
            className="md:mt-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
        </div>
        <div className="md:w-1/2 text-justify">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-900 dark:text-white"
          >
            <h1 className="text-5xl font-bold mb-8 mt-16">Education</h1>
            <p className="text-2xl  font-semibold mb-4">
              Basic Qualifications and Certifications I am actively involved in
              hackathons and various tech-related activities that continuously
              enhance my skills and knowledge in the field. My commitment to
              personal and professional development is reflected in my
              certifications, which include [list notable certifications, e.g.,
              "Certified Web Developer," "AWS Certified Solutions Architect,"
              etc.]. These experiences have equipped me with a solid foundation
              in [mention relevant areas, e.g., "software development," "cloud
              computing," etc.], allowing me to approach challenges with
              creativity and innovation. I am passionate about leveraging my
              expertise to contribute to meaningful projects and collaborate
              with like-minded individuals in the tech community.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="text-justify mx-4 md:mx-16 mt-32">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-900 dark:text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Degrees Received</h1>
          <div className="border border-gray-400 shadow-2xl">
            <div className="flex bg-green-800 justify-between h-12 text-white">
              <div>
                <h1>
                  Wachemo university school of Electrical and computer
                  Engineering
                </h1>
              </div>
              <div>2015-2019</div>
            </div>
            <p className="text-2xl  font-semibold mb-4 text-justify">
              ⚡ I have studied core subjects like Data Structures and Algorithm,
              <br />
              DBMS, Networking, Security etc.
              <br />
              ⚡ I have also completed various online courses for Web
              Development, Mobile App Development, etc. <br />
              ⚡ I have implemented several projects based on what I&apos;ve learnt under My
              Information System course.
            </p>
            <Button
              component="a"
              href="https://www.wcu.edu.et"
              target="_blank"
              color="dark"
              radius="xl"
              size="lg"
              className="text-gray-900 dark:text-white"
            >
              Visit website
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Education;
