"use client";
import React from "react";
import { motion } from "framer-motion";
import { Text, Title } from "@mantine/core";
import EducationIcon from "@/app/components/edu";
import EducationTimeline from "@/app/components/edu-timeline";

const Education = () => {
  return (
    <section className="min-h-screen flex flex-col items-center py-16 text-justify">
      <Title
        order={2}
        className="text-3xl font-bold mb-10 text-gray-900 ml-32 dark:text-white"
      >
        Education
      </Title>

      <div className="flex flex-col md:flex-row md:mx-16 mx-4">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 w-800 h-800">
          <EducationIcon />
        </div>

        <div className="md:w-1/2 spa">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-900 dark:text-white"
          >
            <Text variant="link" component="span" inherit>
              I am passionate about technology and software engineering, with a
              strong commitment to continuously enhancing my skills. Throughout
              my academic journey, I have actively engaged in projects,
              internships, and coding challenges that have helped me grow as a
              developer.
            </Text>
            <Text className="mb-4">
              Here are some key skills and areas of expertise I have developed:
            </Text>
            <ul className="list-disc list-inside mb-4">
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Full-stack software development (React, Angular, Node.js)
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Data structures and algorithms
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Database management and optimization (SQL, MongoDB)
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Version control systems (Git, GitHub)
                </span>
              </li>
              <li>
                <span className="dark:text-white text-gray-900 dark:bg-gray-900 bg-white">
                  Agile methodologies and software development lifecycle (SDLC)
                </span>
              </li>
            </ul>
            <div className="mt-8">
            <EducationTimeline />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
