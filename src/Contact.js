import React from "react";
import "./Contact.scss";
import { Anchor, Box, Card, Heading, Text } from "@dracula/dracula-ui";

function Contact() {
  return (
    <Box className="col-container">
      <Card color="purpleCyan" p="sm" mb="lg" className="col-item">
        <Heading as="h3">
          <i className="fas fa-address-book" /> Contact
        </Heading>
        <Box m="sm">
          <Anchor href="mailto:contact@vour.ch" color="cyan" hoverColor="orange">
            <i className="far fa-envelope" /> <Text color="cyanGreen">contact@vour.ch</Text>
          </Anchor>
        </Box>
      </Card>

      <QR />
    </Box>
  );
}

function QR() {
  return (
    <Box as="figure" align="center" className="col-item">
      <img src="qr.svg" alt="QR Code to this page" height="256" />
      <Text as="figcaption">Link to this page</Text>
    </Box>
  );
}

export default Contact;
