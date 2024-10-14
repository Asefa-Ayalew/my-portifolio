"use client";
import { Card, Text, Title, Progress, Group, ThemeIcon, Box } from "@mantine/core";
import { IconCode, IconDeviceDesktop, IconTools, IconUsers } from "@tabler/icons-react";
import { motion } from "framer-motion";

// Skill data
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Python", proficiency: 42 },
    ],
    icon: <IconCode size={32} />,
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", proficiency: 95 },
      { name: "Next.js", proficiency: 90 },
      { name: "Angular", proficiency: 80 },
    ],
    icon: <IconDeviceDesktop size={32} />,
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "Webpack", proficiency: 70 },
      { name: "Vercel", proficiency: 80 },
    ],
    icon: <IconTools size={32} />,
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", proficiency: 95 },
      { name: "Teamwork", proficiency: 90 },
      { name: "Problem-solving", proficiency: 85 },
    ],
    icon: <IconUsers size={32} />,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-11 dark:bg-gray-900 bg-white dark:text-white text-gray-900 md:mx-16 pb-28 min-h-screen">
      <Box className="max-w-full px-4">
        <Box className="text-center md:text-left mb-10">
          <Title className="text-3xl font-bold text-green-600 mb-2">Skills</Title>
          <Text className="text-lg text-gray-400">
            A showcase of my technical expertise and professional skills.
          </Text>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Group className="mb-4 justify-center">
                <ThemeIcon size={48} radius="xl" color="green-600">
                  {category.icon}
                </ThemeIcon>
                <Title order={3} className="text-xl text-green-300">
                  {category.category}
                </Title>
              </Group>

              {category.skills.map((skill, idx) => (
                <Card
                  key={idx}
                  shadow="md"
                  p="lg"
                  className="dark:bg-gradient-to-r from-gray-800 to-gray-700 bg-white dark:hover:bg-gray-600 transition-transform transform hover:scale-105 hover:shadow-xl mb-4"
                >
                  <div className="flex justify-between items-center">
                    <Text className="dark:text-white text-gray-900 font-semibold">{skill.name}</Text>
                    <Text className="dark:text-white text-gray-900 font-semibold">{skill.proficiency}%</Text>
                  </div>
                  <Progress value={skill.proficiency} color="green" size="lg" className="mt-2" />
                </Card>
              ))}
            </motion.div>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default SkillsSection;
