import React from "react";
import { Button } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconBrandTelegram } from "@tabler/icons-react";

const ContactMe = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 bg-white text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-400 mb-6">
        You can contact me at the places mentioned below. I will try to get back to you as fast as I can.
      </p>
      
      <div className="flex space-x-4 mb-8">
        <Button component="a" href="https://github.com/Asefa-Ayalew" target="_blank" color="dark" radius="xl" size="lg">
          <IconBrandGithub size={24} />
        </Button>
        <Button component="a" href="https://linkedin.com/" target="_blank" color="blue" radius="xl" size="lg">
          <IconBrandLinkedin size={24} />
        </Button>
        <Button component="a" href="mailto:asefa12a19@gmail.com" target="_blank" color="red" radius="xl" size="lg">
          <IconMail size={24} />
        </Button>
        <Button component="a" href="https://twitter.com/" target="_blank" color="blue" radius="xl" size="lg">
          <IconBrandTwitter size={24} />
        </Button>
        <Button component="a" href="https://telegram.org/" target="_blank" color="cyan" radius="xl" size="lg">
          <IconBrandTelegram size={24} />
        </Button>
      </div>
      
      <Button 
        className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-3 rounded-full"
        size="lg"
        radius="lg"
        component="a"
        href="/path-to-resume.pdf"
        download
      >
        See my Resume
      </Button>
    </section>
  );
};

export default ContactMe;
