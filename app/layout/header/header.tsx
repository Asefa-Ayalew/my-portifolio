"use client";
import DarkModeToggle from "@/app/components/dark-mode-toggle";
import { Box, Button } from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'; // Import usePathname from Next.js

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education And Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contacts", label: "Contacts" },
];

const Header = () => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Function to determine if the link is active
  const isActive = (path: string) => (pathname === path ? 'text-green-600' : 'text-gray-900 dark:text-white');

  const renderNavLink = (href: any, label: string) => (
    <Link href={href} onClick={() => setOpened(false)} className={`relative ${isActive(href)}`}>
      <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
      <span className="relative z-10 hover:text-green-600">{label}</span>
    </Link>
  );

  return (
    <Box className="fixed w-full top-0 z-50">
      <Box className="h-24 flex justify-between items-center px-4 md:px-8 dark:bg-gray-900 bg-white">
        <Box className="text-2xl font-sans font-bold">
          <Link href="/home">
            <Box className="text-green-600 font-black md:ml-12">Asefa Ayalew</Box>
          </Link>
        </Box>

        {/* Desktop Navigation */}
        <Box className="hidden md:flex text-xl font-sans font-semibold space-x-8">
          {navLinks.map(({ href, label }) => renderNavLink(href, label))}
          <DarkModeToggle />
        </Box>

        {/* Mobile Menu Icon */}
        <Box className="md:hidden">
          {opened ? (
            <IconX
              onClick={() => setOpened(!opened)}
              className="cursor-pointer dark:text-white text-gray-900"
              size={32}
              strokeWidth={2}
            />
          ) : (
            <IconMenu2
              onClick={() => setOpened(!opened)}
              className="cursor-pointer dark:text-white text-gray-900"
              size={32}
              strokeWidth={2}
            />
          )}
        </Box>
      </Box>

      {/* Mobile Navigation */}
      {opened && (
        <Box className="flex flex-col space-y-4 text-xl dark:bg-gray-900 bg-white items-center text-gray-900 dark:text-white font-sans font-semibold">
          {navLinks.map(({ href, label }) => renderNavLink(href, label))}
          <Button onClick={() => setOpened(false)}>
            <DarkModeToggle />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Header;
