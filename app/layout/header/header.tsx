"use client";
import { Button, Drawer } from "@mantine/core";
import { IconSun, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <><div className="h-24 flex justify-between items-center px-4 md:px-8 bg-black text-white">
      {/* Logo Section */}
      <div className="text-2xl font-sans font-bold">
        <Link href="/home">&lt; Asefa Ayalew /&gt;</Link>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex text-xl font-sans font-semibold space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/education">Education</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contacts</Link>
        <Button className="cursor-pointer">
          <IconSun />
        </Button>
      </div>

      {/* IconMenu2 and IconX for smaller screens */}
      <div className="md:hidden">
        {/* Toggle between IconMenu2 and IconX based on whether the drawer is opened */}
        {opened ? (
          <IconX
            onClick={() => setOpened(!opened)}
            className="cursor-pointer"
            size={32} // Adjust the size of the icon
            strokeWidth={2} // Adjust the thickness of the icon lines
            color="white" // Ensure the icon is visible on dark background
          />
        ) : (
          <IconMenu2
            onClick={() => setOpened(!opened)}
            className="cursor-pointer"
            size={32} // Adjust the size of the icon
            strokeWidth={2} // Adjust the thickness of the icon lines
            color="white" // Ensure the icon is visible on dark background
          />
        )}
      </div>
    </div>
       {opened && (
        <div className="flex flex-col space-y-4 text-xl bg-black items-center text-white font-sans font-semibold">
          <Link href="/" onClick={() => setOpened(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpened(false)}>
            About
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
        </div>
      )}
      </>
  );
};

export default Header;
