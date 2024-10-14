import { Text, Box, Stack } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className="flex items-center mb-4" {...others}>
      <Box className="mr-4">
        <Icon style={{ width: '1.5rem', height: '1.5rem' }} className="dark:text-white text-gray-900" />
      </Box>

      <div>
        <Text size="xs" className="dark:text-white text-gray-900">
          {title}
        </Text>
        <Text className="text-blue-200">{description}</Text>
      </div>
    </div>
  );
}