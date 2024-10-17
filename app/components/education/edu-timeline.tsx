import { Text, Timeline } from '@mantine/core'
import { IconSchool } from '@tabler/icons-react'
import React from 'react'

const EducationTimeline = () => {
  const currentYear = new Date().getFullYear();


  return (
    
    <Timeline active={3} bulletSize={30} lineWidth={2}>
    <Timeline.Item bullet={<IconSchool size={24} />} title="Elementary School" color='var(--mantine-color-primary-7)' className='dark:text-white'>
    <Text size='md'>Abet Elementary school</Text>
      <Text c="dimmed" size="md" className='dark:text-white'>
        2003-2011
        <Text variant="link" component="span" inherit>
          {" "} - Completed primary education with a focus on foundational skills.
        </Text>
      </Text>
      <Text size="sm" mt={2} className='dark:text-white'>
        {currentYear - 2011} years ago
      </Text>
    </Timeline.Item>

    <Timeline.Item bullet={<IconSchool size={24} />} title="Preparatory School" color='var(--mantine-color-primary-7)' className='dark:text-white'>
    <Text size='md'>Wuchale 17 secondary and preparatory school</Text>
      <Text c="dimmed" size="md">
        2011-2015
        <Text variant="link" component="span" inherit>
          {" "} - Completed preparatory education with a focus on analytical and critical thinking skills.
        </Text>
      </Text>
      <Text size="sm" mt={2}>
        {currentYear - 2015} years ago
      </Text>
    </Timeline.Item>

    <Timeline.Item bullet={<IconSchool size={24} />} title="University" color='var(--mantine-color-primary-7)' className='dark:text-white'>
    <Text size='md'>Wachemo University</Text>
      <Text c="dimmed" size="md" className='dark:text-white'>
        2015-2019
        <Text variant="link" component="span" inherit size="md">
          {" "} - Gained advanced knowledge in software development.
        </Text>
      </Text>
      <Text size="sm" mt={2} className='dark:text-white'>
        {currentYear -2019} years ago
      </Text>
    </Timeline.Item>
  </Timeline>
  )
}

export default EducationTimeline