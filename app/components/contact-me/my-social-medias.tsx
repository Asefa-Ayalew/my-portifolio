import { Button } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitter, IconMail } from '@tabler/icons-react';
import { motion } from "framer-motion";

const MySocialMedias = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex space-x-2 my-12"
    >
      <Button
        component="a"
        href="https://github.com/Asefa-Ayalew/"
        target="_blank"
        color="dark"
        radius="lg"
        size="sm"
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-900 dark:text-white" // Circular shape
      >
        <IconBrandGithub size={20} className='text-white' />
      </Button>
      <Button
        component="a"
        href="https://linkedin.com"
        target="_blank"
        color="blue"
        radius="lg"
        size="sm"
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-900 dark:text-white" // Circular shape
      >
        <IconBrandLinkedin size={20} className='text-white' />
      </Button>
      <Button
        component="a"
        href="mailto:asefa10a19@gmail.com" // Updated to use "mailto:" for email
        target="_blank"
        color="red"
        radius="lg"
        size="sm"
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-900 dark:text-white" // Circular shape
      >
        <IconMail size={20} className='text-white' />
      </Button>
      <Button
        component="a"
        href="https://twitter.com"
        target="_blank"
        color="blue"
        radius="lg"
        size="sm"
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-900 dark:text-white" // Circular shape
      >
        <IconBrandTwitter size={20} className='text-white' />
      </Button>
      <Button
        component="a"
        href="https://telegram.org"
        target="_blank"
        color="cyan"
        radius="lg"
        size="sm"
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-900 dark:text-white" // Circular shape
      >
        <IconBrandTelegram size={20} className='text-white' />
      </Button>
    </motion.div>
  );
};

export default MySocialMedias;
