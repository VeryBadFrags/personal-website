import React from "react";
import "./Contact.css";
import { Anchor, Box, Card, Heading, Paragraph, Text } from "@dracula/dracula-ui";

function Contact() {
  return (
    <Box className="col-container">
      <Card color="purpleCyan" p="sm" mb="lg" className="col-item">
        <Heading as="h3">
          <i className="fas fa-address-book" /> Contact
        </Heading>
        <Paragraph m="sm">
          <Anchor href="mailto:contact@vour.ch" color="cyanGreen" hoverColor="orange">
            <i className="far fa-envelope" /> contact@vour.ch
          </Anchor>
        </Paragraph>
      </Card>

      <Box as="figure" align="center" className="col-item">
        <img src="qr.svg" alt="QR Code to this page" height="256" />
        <Text as="figcaption">Link to this page</Text>
      </Box>
    </Box>
  );
}

export default Contact;
