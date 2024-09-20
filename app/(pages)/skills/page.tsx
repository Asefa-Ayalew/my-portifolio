import React from "react";
import { Progress } from "@mantine/core";
import { IconCode, IconDatabase, IconLayoutDashboard } from "@tabler/icons-react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, icon: <IconCode /> },
    { name: "React", level: 85, icon: <IconCode /> },
    { name: "Node.js", level: 80, icon: <IconDatabase /> },
    { name: "UI/UX Design", level: 75, icon: <IconLayoutDashboard /> },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-2xl">{skill.icon}</div>
            <div className="w-full">
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <Progress value={skill.level} size="lg" className="mt-2" />
            </div>
            <span className="text-xl font-semibold">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
