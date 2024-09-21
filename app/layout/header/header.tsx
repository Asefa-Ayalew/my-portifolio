"use client";
import DarkModeToggle from "@/app/components/dark-mode-toggle";
import { Button } from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <><div className="h-24 flex justify-between items-center px-4 md:px-8 dark:bg-gray-900 bg-white dark:text-white text-gray-900">
      <div className="text-2xl font-sans font-bold">
        <Link href="/home"> <div className="text-green-800">Asefa Ayalew</div></Link>
      </div>

      <div className="hidden md:flex text-xl font-sans font-semibold space-x-8">
        <Link href="/">Home</Link>
        <Link href="/education">Education</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contacts</Link>
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
          <Link href="/" onClick={() => setOpened(false)}>
            Home
          </Link>
          <Link href="/education" onClick={() => setOpened(false)}>
            Education
          </Link>
          <Link href="/skills" onClick={() => setOpened(false)}>
            Skills
          </Link>
          <Link href="/projects" onClick={() => setOpened(false)}>
            Projects
          </Link>
          <Link href="/contacts" onClick={() => setOpened(false)}>
            Contacts
          </Link>
          <Button onClick={() => setOpened(false)}>
            <DarkModeToggle />
            </Button>
        </div>
      )}
      </>
  );
};

export default Header;
