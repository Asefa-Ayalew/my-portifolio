// src/components/ProjectCard.tsx
"use client";
import { useState } from "react";
import {
  Card,
  Text,
  Title,
  Divider,
  Button,
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
      className={`mb-4 bg-gradient-to-r from-gray-800 to-gray-700 transition-transform duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 flex-1`}      
    >
      <Title order={4} className="text-lg font-semibold text-white text-left">
        {item.title}
      </Title>
      <div className="flex flex-col h-full">
        <Text size="sm" className="text-gray-400 flex-1 overflow-hidden" style={{ maxHeight: showMore ? "none" : "3.2em", transition: "max-height 0.3s ease" }}>
          {showMore ? item.description : `${item.description.substring(0, 150)}...`}
        </Text>
        
        {/* Conditionally render the button based on the description length */}
        {isLongDescription && (
          <Button
            variant="outline"
            color="green"
            onClick={() => setShowMore((prev) => !prev)}
            className="mt-2 w-28 self-start"
          >
            {showMore ? "See Less" : "See More"}
          </Button>
        )}
      </div>
      <Divider my="sm" color="green" />
      <Text size="xs" className="text-green-600">
        {item.technologies} - {item.year}
      </Text>
    </Card>
  );
};

export default ProjectCard;
