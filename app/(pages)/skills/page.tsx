"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge, Progress, Rating } from "@mantine/core";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconCode,
  IconBrandAngular,
  IconBrandAdobe,
} from "@tabler/icons-react";

const Skills = () => {
  const skills = [
    { name: "React", icon: IconBrandReact, rating: 4.5, progress: 85 },
    { name: "Next.js", icon: IconBrandNextjs, rating: 4.85, progress: 95 },
    { name: "Angular", icon: IconBrandAngular, rating: 4.7, progress: 94 },
    { name: "Node.js", icon: IconBrandNodejs, rating: 3.5, progress: 70 },
    { name: "Nest.js", icon: IconBrandAdobe, rating: 4, progress: 80 },
    { name: "ASP.NET", icon: IconCode, rating: 2.5, progress: 50 },
  ];
  return (
    <section
      className="md:flex md:justify-between w-full min-h-screen dark:bg-gray-900 bg-white dark:text-white text-gray-900 md:mx-16 mx-4 w-
    "
    >
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
        className="md:w-1/2 mt-16 mr-24"
      >
        <h1 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-red-500">
          My Skills
        </h1>
        <p className="text-lg mb-6">
          I am a passionate software engineer with experience in building modern
          web applications. Here are some of the technologies I have mastered:
        </p>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
            >
              <div className="flex items-center space-x-4 mb-2">
                <skill.icon size={32} className="text-blue-600" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>{" "}
              <div className="mb-2">
                <Rating value={skill.rating} fractions={2} readOnly />
              </div>
              <Progress
                value={skill.progress}
                color="blue"
                className="mb-2"
                radius="lg"
                size="lg"
              />
              <Badge color="teal" size="lg">
                Proficiency: {skill.progress}%
              </Badge>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
