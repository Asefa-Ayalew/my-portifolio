import Home from "@/app/page";
import { Button } from "@mantine/core";
import { IconSun } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-24 flex justify-between items-center mx-16">
      <div className="text-3xl font-sans font-bold">
        <Link href="/home">&lt; Asefa Ayalew /&gt;</Link>
      </div>
      <div className="text-2xl font-sans font-semibold space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/education">Education</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contracts</Link>
      </div>
      <div className="text-2xl font-sans font-semibold">
        <Button className="cursor-pointer">
          <IconSun />
        </Button>
      </div>
    </div>
  );
};

export default Header;
