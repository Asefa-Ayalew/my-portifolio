"use client"
import React from "react";
import { Button } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconBrandTelegram } from "@tabler/icons-react";

const ContactMe = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 bg-white text-center dark:text-white text-gray-900">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg dark:text-gray-100 text-gray-400 mb-6 md:mx-64 mx-4 text-justify">
        I'm always open to new opportunities and would love to connect with you! Whether it's about my work, potential collaborations, or just a friendly chat, feel free to reach out to me through any of the platforms below. I'll do my best to respond as quickly as possible.
      </p>
      
      <div className="flex space-x-4 mb-8">
        <Button component="a" href="https://github.com/Asefa-Ayalew" target="_blank" color="dark" radius="xl" size="lg" aria-label="GitHub Profile">
          <IconBrandGithub size={24} />
        </Button>
        <Button component="a" href="https://linkedin.com/" target="_blank" color="blue" radius="xl" size="lg" aria-label="LinkedIn Profile">
          <IconBrandLinkedin size={24} />
        </Button>
        <Button component="a" href="mailto:asefa12a19@gmail.com" target="_blank" color="red" radius="xl" size="lg" aria-label="Send Email">
          <IconMail size={24} />
        </Button>
        <Button component="a" href="https://twitter.com/" target="_blank" color="blue" radius="xl" size="lg" aria-label="Twitter Profile">
          <IconBrandTwitter size={24} />
        </Button>
        <Button component="a" href="https://telegram.org/" target="_blank" color="cyan" radius="xl" size="lg" aria-label="Telegram Profile">
          <IconBrandTelegram size={24} />
        </Button>
      </div>
      
      <Button 
        className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-lg"
        size="lg"
        radius="lg"
        component="a"
        href="/path-to-resume.pdf"
        download
        aria-label="Download Resume"
      >
        See my Resume
      </Button>
    </section>
  );
};

export default ContactMe;
