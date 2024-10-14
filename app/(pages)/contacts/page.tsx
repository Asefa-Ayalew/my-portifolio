"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactMeSection } from "@/app/components/contact-me/contact-me";
import { Box } from "@mantine/core";

const ContactMe = () => {
  return (
    <Box className="justify-between md:pt-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-900 dark:text-white"
      >
        <ContactMeSection />
      </motion.div>
    </Box>
  );
};

export default ContactMe;
