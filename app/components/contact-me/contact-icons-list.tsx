import { Stack } from "@mantine/core";
import { ContactIcon } from "./contact-icon";
import { IconAt, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

const MOCKDATA = [
  { title: 'Email', description: 'asefa12a19@gmail.com', icon: IconAt, link: 'mailto:asefa12a19@gmail.com' },
  { title: 'Phone', description: '+251 9 61 44 54 84', icon: IconPhone, link: 'tel:+251961445484' },
  { title: 'Address', description: 'Addis Ababa, Ethiopia', icon: IconMapPin, link: 'https://www.google.com/maps?q=Addis+Ababa,+Ethiopia' },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
      <ContactIcon {...item} />
    </Link>
  ));

  return <Stack mb={2}>{items}</Stack>;
}
