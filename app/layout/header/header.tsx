"use client";
import DarkModeToggle from "@/app/components/dark-mode-toggle";
import { Button } from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'; // Import usePathname from Next.js

const Header = () => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Function to determine if the link is active
  const isActive = (path: string) => (pathname === path ? 'text-green-600' : 'text-gray-900 dark:text-white');

  return (
    <div className="fixed w-full top-0 z-50">
      <div className="h-24 flex justify-between items-center px-4 md:px-8 dark:bg-gray-900 bg-white">
        <div className="text-2xl font-sans font-bold">
          <Link href="/home">
            <div className="text-green-600 font-black md:ml-12">Asefa Ayalew</div>
          </Link>
        </div>

        <div className="hidden md:flex text-xl font-sans font-semibold space-x-8">
          <Link href="/" className={`relative ${isActive('/')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Home</span>
          </Link>
          <Link href="/education" className={`relative ${isActive('/education')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Education</span>
          </Link>
          <Link href="/skills" className={`relative ${isActive('/skills')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Skills</span>
          </Link>
          <Link href="/projects" className={`relative ${isActive('/projects')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Projects</span>
          </Link>
          <Link href="/contacts" className={`relative ${isActive('/contacts')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Contacts</span>
          </Link>
          <DarkModeToggle />
        </div>

        <div className="md:hidden">
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
        </div>
      </div>

      {opened && (
        <div className="flex flex-col space-y-4 text-xl dark:bg-gray-900 bg-white items-center text-gray-900 dark:text-white font-sans font-semibold">
          <Link href="/" onClick={() => setOpened(false)} className={`relative ${isActive('/')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Home</span>
          </Link>
          <Link href="/education" onClick={() => setOpened(false)} className={`relative ${isActive('/education')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Education</span>
          </Link>
          <Link href="/skills" onClick={() => setOpened(false)} className={`relative ${isActive('/skills')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Skills</span>
          </Link>
          <Link href="/projects" onClick={() => setOpened(false)} className={`relative ${isActive('/projects')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Projects</span>
          </Link>
          <Link href="/contacts" onClick={() => setOpened(false)} className={`relative ${isActive('/contacts')}`}>
            <span className="absolute inset-0 transition-all duration-300 transform opacity-0 hover:opacity-100 hover:text-green-600 rounded-lg"></span>
            <span className="relative z-10 hover:text-green-600">Contacts</span>
          </Link>
          <Button onClick={() => setOpened(false)}>
            <DarkModeToggle />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
