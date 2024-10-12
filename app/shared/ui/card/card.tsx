import { Card, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

// Define the props interface
interface SharedCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ComponentType<{ size?: string | number }>; // Optional icon component
  duration?: number; // Optional duration, default is 1
}

const SharedCard: React.FC<SharedCardProps> = ({
  title,
  subtitle,
  description,
  icon: IconComponent,
  duration = 1,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      className="text-gray-900 dark:text-white dark:bg-gray-800 bg-white"
    >
      <Card
        shadow="md"
        padding="lg"
        radius="md"
        className="border border-gray-400 hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between dark:text-white text-gray-900 p-4 rounded-t-md">
          <span className="flex items-center space-x-2">
            {IconComponent && <IconComponent size={24} />}
            <Text className="font-semibold">{title}</Text>
          </span>
          <Text className="text-gray-600 dark:text-gray-400">{subtitle}</Text>
        </div>
        <div className="p-4">
          <Text className="font-semibold mb-2">{description}</Text>
        </div>
      </Card>
    </motion.div>
  );
};

export default SharedCard;
