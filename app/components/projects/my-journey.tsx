"use client";
import { motion } from "framer-motion";
import { Card, Text, Title, Group, Divider, ThemeIcon, Box } from "@mantine/core";
import { IconBook, IconBriefcase } from "@tabler/icons-react";

const journeyData = {
  education: [
    {
      title: "Master Degree in Computer Science",
      description:
        "Specialized in Artificial Intelligence and Machine Learning, focusing on predictive analytics and neural networks.",
      year: "2022",
      institution: "Tech University",
    },
    {
      title: "Bachelor Degree in Information Technology",
      description:
        "Gained a strong foundation in software development, data structures, and web technologies.",
      year: "2020",
      institution: "Global Institute of Technology",
    },
  ],
  experience: [
    {
      title: "Frontend Developer",
      description:
        "Developed responsive and dynamic user interfaces using React, TypeScript, and Tailwind CSS. Focused on improving performance and user experience.",
      year: "2023 - Present",
      company: "Innovative Solutions Co.",
    },
    {
      title: "Web Developer Intern",
      description:
        "Worked on creating modern websites with a focus on responsive design and interactive features. Learned industry best practices for front-end development.",
      year: "2021 - 2022",
      company: "Creative Web Agency",
    },
  ],
};

const MyJourney = () => {
  return (
    <section id="my-journey" className="py-20 bg-gray-900 text-white md:mx-16">
      <Box className="max-w-full px-4">
        <Box className="text-center md:text-left mb-10">
          <Title className="text-3xl font-bold text-green-600 mb-2">
            My Journey
          </Title>
          <Text className="text-lg text-gray-400">
            A glimpse of my education and work experiences that shaped my career
            path.
          </Text>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full" // Added h-full to make sure the flex column takes full height
          >
            <Group className="mb-6 flex justify-center">
              <ThemeIcon size={48} radius="xl" color="green-600">
                <IconBook size={32} />
              </ThemeIcon>
              <Title order={3} className="text-2xl text-green-300">
                Education
              </Title>
            </Group>
            {journeyData.education.map((item, index) => (
              <Card
                key={index}
                shadow="md"
                p="lg"
                className="mb-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:bg-gray-600 flex-1 transition-transform transform hover:scale-105 hover:shadow-xl" // Added flex-1 to make cards stretch
              >
                <Title order={4} className="text-lg font-semibold text-white">
                  {item.title}
                </Title>
                <Text size="sm" className="text-gray-400">
                  {item.description}
                </Text>
                <Divider my="sm" color="green" />
                <Text size="xs" className="text-green-600">
                  {item.institution} - {item.year}
                </Text>
              </Card>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full" // Added h-full to make sure the flex column takes full height
          >
            <Group className="mb-6 flex justify-center">
              <ThemeIcon size={48} radius="xl" color="green">
                <IconBriefcase size={32} />
              </ThemeIcon>
              <Title order={3} className="text-2xl text-green-300">
                Experience
              </Title>
            </Group>
            {journeyData.experience.map((item, index) => (
              <Card
                key={index}
                shadow="md"
                p="lg"
                className="mb-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:bg-gray-600 flex-1 transition-transform transform hover:scale-105 hover:shadow-xl" // Added flex-1 to make cards stretch
              >
                <Title order={4} className="text-lg font-semibold text-white">
                  {item.title}
                </Title>
                <Text size="sm" className="text-gray-400">
                  {item.description}
                </Text>
                <Divider my="sm" color="green" />
                <Text size="xs" className="text-green-600">
                  {item.company} - {item.year}
                </Text>
              </Card>
            ))}
          </motion.div>
        </Box>
      </Box>
    </section>
  );
};

export default MyJourney;
