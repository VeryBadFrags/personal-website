import React from "react";
import { Anchor, Box, Card, Heading, Paragraph, Text } from "@dracula/dracula-ui";

function Contact() {
  return (
    <Box className="row row-cols-1 row-cols-lg-2 gy-4 mb-4">
      <Card color="purpleCyan" p="sm" className="col">
        <Heading as="h3" className="card-title">
          <i className="fas fa-address-book"></i> Contact
        </Heading>
        <Paragraph m="sm">
          <Anchor href="mailto:contact@vour.ch" color="cyanGreen" hoverColor="orange">
            <i className="far fa-envelope"></i> contact@vour.ch
          </Anchor>
        </Paragraph>
      </Card>

      <Box className="col d-flex justify-content-center">
        <figure>
          <img src="qr.svg" alt="QR Code to this page" height="256" />
          <Text as="figcaption" className="text-center">
            Link to this page
          </Text>
        </figure>
      </Box>
    </Box>
  );
}

export default Contact;
