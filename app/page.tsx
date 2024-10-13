"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button, Container, Text } from "@mantine/core";
import TypingEffect from "./shared/ui/typeing-effect";
import MySocialMedias from "./components/contact-me/my-social-medias";

const Home = () => {
  return (
    <section className="md:flex md:justify-between w-full min-h-screen dark:bg-gray-900 bg-white dark:text-white text-gray-900 md:mx-16">
      <Container className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text className="text-2xl font-bold my-6">
            Hi, I&apos;m Asefa Ayalew
          </Text>
          <TypingEffect
            strings={[
              "Fronted Developer",
              "Crafting Interactive Experiences with React",
              "Building Robust Applications with Angular",
              "Developing Seamless User Interfaces with Next.js",
              "Designing Intuitive User Experiences as a UI/UX Innovator",
              "Mastering Modern Web Technologies for Superior Performance",
              "Empowering Brands through Innovative Web Development",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop={true}
          />
          <Text className="max-w-xl mt-4 mb-8 text-justify">
            I am a passionate Frontend Developer dedicated to creating
            exceptional digital experiences. With expertise in technologies like
            React, Angular, and Next.js, I strive to build responsive and
            intuitive user interfaces that not only engage users but also
            elevate brands. My goal is to transform complex ideas into seamless,
            user-friendly applications that foster interaction and drive
            business success. Let&apos;s work together to turn your vision into a
            reality!
          </Text>

          <div className="space-x-4">
            <Button className="bg-green-text-green-600 hover:bg-green-600">
              Hire Me
            </Button>
            <Button
              variant="outline"
              className="border-green-text-green-600 text-green-600 hover:bg-green-text-green-600 hover:text-white"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
        <MySocialMedias />
      </Container>
      <Container className="md:w-1/2">
        {/* Image Animation (Optional) */}
        <motion.img
          src="./images/profile1.jpg" // Replace with your image
          alt="Developer at work"
          className="mt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
      </Container>
    </section>
  );
};
export default Home;
