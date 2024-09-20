import React from "react";
import { Card } from "@mantine/core";

const Education = () => {
  const educationList = [
    {
      institution: "University of XYZ",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2022",
    },
    {
      institution: "ABC High School",
      degree: "High School Diploma",
      year: "2014 - 2018",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-10">Education</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationList.map((edu, index) => (
          <Card
            key={index}
            shadow="sm"
            padding="lg"
            className="bg-gray-100 text-center"
          >
            <h3 className="text-2xl font-semibold">{edu.institution}</h3>
            <p className="text-xl mt-2">{edu.degree}</p>
            <p className="text-gray-500 mt-1">{edu.year}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
