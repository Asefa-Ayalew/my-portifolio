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
import { ContactIconsList } from "./contact-icons";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactMeSection() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      variant="transparent"
      className="hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <Icon
        size="1.4rem"
        stroke={1.5}
        className="text-gray-900 dark:text-white"
      />
    </ActionIcon>
  ));

  return (
    <Box className="w-full md:mx-16 mx-4 bg-white dark:bg-gray-900 py-12 px-6">
      <Box>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <Box>
            <Title className="text-gray-900 dark:text-white">Contact Us</Title>
            <Text className="text-gray-900 dark:text-white mt-4 mb-8">
              Leave your email and we will get back to you within 24 hours.
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </Box>
          <Box className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <TextInput
              label="Email"
              placeholder="asefa12a19@gmail.com.com"
              required
              className="text-gray-900 dark:text-white"
            />
            <TextInput
              label="Name"
              placeholder="Asefa Ayalew"
              mt="md"
              className="text-gray-900 dark:text-white"
            />
            <Textarea
              required
              label="Your message"
              placeholder="enter your message here"
              minRows={4}
              mt="md"
              className="text-gray-900 dark:text-white"
            />

            <Group justify="flex-end" mt="md">
              <Button className="bg-green-600 hover:bg-green-500 text-white">
                Send message
              </Button>
            </Group>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
