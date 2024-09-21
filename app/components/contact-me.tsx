import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

const ContactMe = () => {
  return (
    <div className="flex flex-col md:w-1/2">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-2 text-justify mt-4">Hello.</h1>
        <p className="text-2xl text-gray-900 dark:text-white font-semibold mb-4 text-justify">
          I&apos;m Asefa Ayalew. <br />
          ReactJS | NextJS, Angular, Nodejs, flutter, asp.net
        </p>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex space-x-4 mb-6"
      >
        <Button
          component="a"
          href="https://github.com/Asefa-Ayalew/"
          target="_blank"
          color="dark"
          radius="xl"
          size="lg"
          className="text-gray-900 dark:text-white"
        >
          <IconBrandGithub size={24} />
        </Button>
        <Button
          component="a"
          href="https://linkedin.com"
          target="_blank"
          color="blue"
          radius="xl"
          size="lg"
          className="text-gray-900 dark:text-white"
        >
          <IconBrandLinkedin size={24} />
        </Button>
        <Button
          component="a"
          href="asefa12a19@gmail.com"
          target="_blank"
          color="red"
          radius="xl"
          size="lg"
          className="text-gray-900 dark:text-white"
        >
          <IconMail size={24} />
        </Button>
        <Button
          component="a"
          href="https://twitter.com"
          target="_blank"
          color="blue"
          radius="xl"
          size="lg"
          className="text-gray-900 dark:text-white"
        >
          <IconBrandTwitter size={24} />
        </Button>
        <Button
          component="a"
          href="https://telegram.org"
          target="_blank"
          color="cyan"
          radius="xl"
          size="lg"
          className="text-gray-900 dark:text-white"
        >
          <IconBrandTelegram size={24} />
        </Button>
      </motion.div>

      {/* Contact Me Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
          size="lg"
          radius="lg"
          component="a"
          href="/contact"
        >
          Contact Me
        </Button>
      </motion.div>
    </div>
  );
};

export default ContactMe;
