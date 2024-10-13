// src/components/MyProjects.tsx
"use client";
import { motion } from "framer-motion";
import { Title, Text, Box } from "@mantine/core";
import ProjectsList from "@/app/components/projects/projects-list";

const projectsData = {
  personalProjects: [
    {
      title: "Personal Portfolio",
      description:
        "Designed and built my personal portfolio to showcase my skills and projects using React, Mantine, and Framer Motion.",
      year: "2024",
      technologies: "React, Mantine, Framer Motion, Tailwind CSS",
    },
    {
      title: "E-commerce Website",
      description:
        "Contributed to the development of a responsive e-commerce website focusing on user experience and performance optimization.",
      year: "2024",
      technologies: "Nextjs, Redux, Mantine, Typescript and tailwindcss",
    },
  ],
  collaborativeProjects: [
    {
      title: "Egp",
      description:
        "Around the world, governments have been traditionally embracing ICT to improve the efficiency and effectiveness with which they deliver services to their citizens and provide timely and accurate access to information. These initiatives span the entire spectrum of government responsibilities and are generically termed eGovernment initiatives (or e-Governance). One of the most successful applications of ICT is in the area of public procurement, known as Electronic Government Procurement (e-GP).",
      year: "2022 - present",
      technologies: "Angular, Ngxs, ng-zorro-antd, Typescript, and tailwindcss",
    },
    {
      title: "E-Service",
      description:
        "The Ethiopian Government Electronic Services Portal has been developed to provide electronic public services to citizens, non-citizens, businesses, and governmental & non-governmental organizations.",
      year: "2021-2022",
      technologies: "React, Redux, Mantine, typescript and tailwindcss",
    },
  ],
};

const MyProjects = () => {
  return (
    <section id="my-projects" className="py-10 dark:bg-gray-900 bg-white dark:text-white text-gray-900 md:mx-16">
      <Box className="max-w-full px-4">
        <Box className="text-center md:text-left mb-10">
          <Title className="text-3xl font-bold text-green-600 mb-2">
            My Projects
          </Title>
          <Text className="text-lg text-gray-400">
            A selection of personal and collaborative projects that highlight my
            skills and contributions.
          </Text>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Projects Section */}
          <ProjectsList 
            projects={projectsData.personalProjects} 
            title="Personal Projects" 
            icon="code" 
          />

          {/* Collaborative Projects Section */}
          <ProjectsList 
            projects={projectsData.collaborativeProjects} 
            title="Collaborative Projects" 
            icon="rocket" 
          />
        </Box>
      </Box>
    </section>
  );
};

export default MyProjects;
