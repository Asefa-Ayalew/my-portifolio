"use client";
import {
  Box,
  Title,
  Text,
  Card,
  Group,
  ThemeIcon,
  Button,
} from "@mantine/core";
import { motion } from "framer-motion";
import { servicesData } from "./services";
import { useState } from "react";
import './services.css'


const ServicesSection = () => {
  const [expandedServices, setExpandedServices] = useState<number[]>([]); // Track expanded service indices

  // Toggle the service expansion
  const toggleService = (index: number) => {
    setExpandedServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="services"
      className="py-11 dark:bg-gray-900 bg-white dark:text-white text-gray-900 md:mx-16 pb-28 min-h-screen"
    >
      <Box className="max-w-full px-4">
        <Box className="text-start mb-10">
          <Title className="text-3xl font-bold text-green-600 mb-2">
            My Services
          </Title>
          <Text className="text-lg text-gray-400">
            As a Frontend Developer, I offer a variety of services tailored to
            bring your ideas to life. Explore how I can help you.
          </Text>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const isExpanded = expandedServices.includes(index); // Check if the service is expanded
            const descriptionToShow = isExpanded
              ? service.description
              : `${service.description.slice(0, 120)}...`;

            return (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  shadow="md"
                  p="lg"
                  radius="lg"
                  className="dark:bg-gradient-to-r from-gray-800 to-gray-700 bg-white dark:hover:bg-gray-600 transition-transform transform hover:scale-105 hover:shadow-xl mb-4"
                >
                  <Group className="mb-4 justify-center">
                    <ThemeIcon size={48} radius="xl" color="green-600">
                      {service.icon}
                    </ThemeIcon>
                    <Title order={3} className="text-xl text-green-300">
                      {service.title}
                    </Title>
                  </Group>
                  <Text className="dark:text-white text-gray-900">
                    {descriptionToShow}
                  </Text>
                  <Button
                    variant="outline"
                    color="green"
                    className="mt-4 self-start"
                    size="xs"
                    onClick={() => toggleService(index)} // Toggle button click
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </section>
  );
};

export default ServicesSection;
