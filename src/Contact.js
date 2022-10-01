import React from 'react'
import './Contact.scss'
import { Anchor, Box, Card, Heading, Text } from 'dracula-ui'
import { FaAddressBook, FaEnvelope } from 'react-icons/fa'

function Contact () {
  return (
    <Box>
      <Card color='purpleCyan' p='sm' mb='lg'>
        <Heading as='h3'>
          <FaAddressBook /> Contact
        </Heading>
        <Box m='sm'>
          <Anchor href='mailto:contact@vour.ch' color='cyan' hoverColor='orange'>
            <FaEnvelope /> <Text>contact@vour.ch</Text>
          </Anchor>
        </Box>
      </Card>

      <Qr />
    </Box>
  )
}

function Qr () {
  return (
    <Box as='figure' align='center'>
      <img src='qr.svg' alt='QR Code to this page' height='256' />
      <Text as='figcaption'>Link to this page</Text>
    </Box>
  )
}

export default Contact
