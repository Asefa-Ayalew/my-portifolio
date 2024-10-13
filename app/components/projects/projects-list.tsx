// src/components/ProjectsList.tsx
"use client";
import { motion } from "framer-motion";
import {
  Group,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCode, IconRocket } from "@tabler/icons-react";
import ProjectCard from "./projects-card";

interface Project {
  title: string;
  description: string;
  year: string;
  technologies: string;
}

interface ProjectsListProps {
  projects: Project[];
  title: string;
  icon: string; 
}

const ProjectsList = ({ projects, title, icon }: ProjectsListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col"
    >
      <Group className="mb-6 flex flex-start">
        <ThemeIcon size={48} radius="xl" color="green-600">
          {/* Use the icon based on the name passed */}
          {icon === "code" ? <IconCode size={32} /> : <IconRocket size={32} />}
        </ThemeIcon>
        <Title order={3} className="text-2xl text-green-600">
          {title}
        </Title>
      </Group>
      {projects.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </motion.div>
  );
};

export default ProjectsList;
