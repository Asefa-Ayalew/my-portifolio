"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactMeSection } from "@/app/components/contact-me/contact-me";

const ContactMe = () => {
  return (
    <div className="md:flex justify-between md:pt-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-900 dark:text-white"
      >
        <ContactMeSection />
      </motion.div>
    </div>
  );
};

export default ContactMe;
