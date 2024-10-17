"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Text, Title } from "@mantine/core";
import EducationIcon from "@/app/components/education/edu";
import EducationTimeline from "@/app/components/education/edu-timeline";

const EducationSection = () => {
  return (
    <section className="flex flex-col items-center text-justify min-h-screen">
      <Title
        order={2}
        className="text-2xl font-bold text-green-600 md:ml-32 mb-4 items-center"
      >
        Education
      </Title>

      <Box className="flex flex-col md:flex-row md:mx-16 mx-4">
        <Box className="md:w-1/2 flex justify-center mb-8 md:mb-0 w-[436px] h-[436px]">
          <EducationIcon />
        </Box>

        <Box className="md:w-1/2">
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
            <Box className="mt-8">
            <EducationTimeline />
            </Box>
          </motion.div>
          
        </Box>
      </Box>
    </section>
  );
};

export default EducationSection;
