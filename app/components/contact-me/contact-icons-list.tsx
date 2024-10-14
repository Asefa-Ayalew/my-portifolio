import { Stack } from "@mantine/core";
import { ContactIcon } from "./contact-icon";
import { IconAt, IconMapPin, IconPhone } from "@tabler/icons-react";

const MOCKDATA = [
  { title: 'Email', description: 'asefa12a19@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+251 9 61 44 54 84', icon: IconPhone },
  { title: 'Address', description: 'Addis Ababa, Ethiopia', icon: IconMapPin },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return (
    <Stack mb={2}>
      {items}
    </Stack>
  );
}
