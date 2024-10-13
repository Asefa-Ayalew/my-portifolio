// src/components/ProjectCard.tsx
"use client";
import { useState } from "react";
import {
  Card,
  Text,
  Title,
  Divider,
  Button,
  Box,
} from "@mantine/core";

interface Project {
  title: string;
  description: string;
  year: string;
  technologies: string;
}

interface ProjectCardProps {
  item: Project;
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  const [showMore, setShowMore] = useState(false);
  
  // Determine if the description exceeds 120 characters
  const isLongDescription = item.description.length > 120;

  return (
    <Card
      shadow="md"
      p="lg"
      radius={"xl"}
      className={`mb-4 dark:bg-gradient-to-r from-gray-800 to-gray-700 bg-white transition-transform duration-300 ease-in-out dark:hover:bg-gray-600 hover:bg-transparent hover:scale-105 flex-1`}      
    >
      <Title order={4} className="text-lg font-semibold text-text-gray-900 dark:text-white text-left">
        {item.title}
      </Title>
      <Box className="flex flex-col h-full">
        <Text size="sm" className="text-gray-400 flex-1 overflow-hidden" style={{ maxHeight: showMore ? "none" : "3.2em", transition: "max-height 0.3s ease" }}>
          {showMore ? item.description : `${item.description.substring(0, 150)}...`}
        </Text>
        
        {/* Conditionally render the button based on the description length */}
        {isLongDescription && (
          <Button
            variant="outline"
            color="green"
            onClick={() => setShowMore((prev) => !prev)}
            className="mt-2 self-start"
            size="xs"
          >
            {showMore ? "See Less" : "See More"}
          </Button>
        )}
      </Box>
      <Divider my="sm" color="green" />
      <Text size="xs" className="text-green-600">
        {item.technologies} - {item.year}
      </Text>
    </Card>
  );
};

export default ProjectCard;
