import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Box,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { ContactIconsList } from "./contact-icons-list";
import MySocialMedias from "./my-social-medias";

const socialIcons = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactMeSection() {
  return (
    <Box className="md:mx-16 mx-4 bg-white dark:bg-gray-900 px-6">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50} className="w-full">
        <Box>
          <Title className="text-gray-900 dark:text-white">Contact Me</Title>
          <Text className="text-gray-900 dark:text-white mt-4 mb-8">
            Leave your email and we will get back to you within 24 hours.
          </Text>
          <ContactIconsList />
          <MySocialMedias />{" "}
        </Box>

        <Box className="bg-white dark:bg-gray-900 p-8 rounded-md shadow-xl border border-gray-200">
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{
              input:
                "bg-white dark:bg-gray-900 border-gray-200 dark:text-white text-black placeholder-gray-500 dark:placeholder-white",
              label: "dark:text-white text-black",
            }}
          />
          <TextInput
            label="Name"
            placeholder="your name"
            mt="md"
            classNames={{
              input:
                "bg-white dark:bg-gray-900 border-gray-200 dark:text-white text-black placeholder-gray-500 dark:placeholder-white",
              label: "dark:text-white text-black",
            }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="Enter your message"
            minRows={4}
            mt="md"
            classNames={{
              input:
                "bg-white dark:bg-gray-900 border-gray-200 dark:text-white text-black placeholder-gray-500 dark:placeholder-white",
              label: "dark:text-white text-black",
            }}
          />
          <Group className="flex justify-end mt-4">
            <Button className="bg-green-600 hover:bg-green-500 text-white">
              Send message
            </Button>
          </Group>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
