import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconDevices,
  IconLanguage,
  IconRocket,
} from "@tabler/icons-react";

export interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const servicesData: Service[] = [
  {
    title: "Responsive Web Development",
    description:
      "Crafting visually stunning and highly functional websites that seamlessly adapt to various devices and screen sizes, ensuring a flawless user experience across mobile, tablet, and desktop.",
    icon: <IconDevices size={32} />,
  },
  {
    title: "Single Page Applications (SPAs)",
    description:
      "Building fast and user-friendly single-page applications using React and Next.js, offering users a smooth and dynamic experience without the need for constant page reloads.",
    icon: <IconBrandNextjs size={32} />,
  },
  {
    title: "Custom UI/UX Design",
    description:
      "Designing intuitive and aesthetically pleasing user interfaces that prioritize user experience, effectively communicate your brand's message, and drive user engagement.",
    icon: <IconBrandReact size={32} />,
  },
  {
    title: "Performance Optimization",
    description:
      "Implementing advanced optimization techniques to enhance website performance, ensuring fast loading times and improved user satisfaction, ultimately leading to better retention and conversion rates.",
    icon: <IconRocket size={32} />,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly integrating third-party APIs to enhance your application's functionality, enabling real-time data access and a richer user experience, tailored to your business needs.",
    icon: <IconBrandTypescript size={32} />,
  },
  {
    title: "Internationalization (i18n)",
    description:
      "Implementing robust internationalization features to support multiple languages and regional formats in your web applications, making them accessible and user-friendly for a global audience.",
    icon: <IconLanguage size={32} />,
  },
];
