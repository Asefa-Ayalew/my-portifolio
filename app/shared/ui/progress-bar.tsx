"use client";
import { useEffect, useState } from "react";
import { Progress } from "@mantine/core";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Change this to adjust the speed
      });
    }, 500); // Change this to adjust the timing

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      value={progress}
      size="sm"
      color="green"
      className="fixed top-0 left-0 z-10"
    />
  );
};

export default ProgressBar;
