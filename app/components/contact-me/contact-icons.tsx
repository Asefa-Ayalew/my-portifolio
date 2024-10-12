import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className="flex items-center mb-4">
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} className='text-gray-900 dark:text-white' />
      </Box>

      <div>
        <Text size="xs" className='text-gray-900 dark:text-white'>
          {title}
        </Text>
        <Text className="text-gray-900 dark:text-white">{description}</Text>
      </div>
    </div>
  );
}

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
