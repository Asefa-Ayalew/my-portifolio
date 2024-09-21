import React from "react";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen dark:bg-gray-900 bg-white">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
      Hi, I&#39;m Asefa Ayalew
      </h1>
      <p className="text-xl text-gray-900 dark:text-whitemb-8">
        A Full-Stack Developer with a passion for creating impactful web
        applications.
      </p>
      <Link href="/projects">
        <Button className="text-lg" size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
          See My Work <IconArrowRight className="ml-2" />
        </Button>
      </Link>
    </section>
  );
};

export default Home;
