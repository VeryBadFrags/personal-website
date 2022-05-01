import { Box, Heading } from '@dracula/dracula-ui'
import React from 'react'

export default function Section ({ icon, title, children }) {
  return (
    <Box id={`section-${title}`} my='md'>
      {title
        ? (
          <Heading as='h2' size='xl' color='purple'>
            {icon} <span className='drac-text-purple-cyan'>{title}</span>
          </Heading>
          )
        : null}
      {children}
    </Box>
  )
}
