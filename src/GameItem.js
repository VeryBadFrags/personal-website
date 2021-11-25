import React from "react";
import parse from "html-react-parser";
import { Anchor, Box, Card, Heading, List, Paragraph } from "@dracula/dracula-ui";

export default function CardItem({ content }) {
  return (
    <Card variant="subtle" color="cyan" p="sm">
      <Box className="d-flex justify-content-between">
        <Heading as="h3" color="cyanGreen">{parse(content.title)}</Heading>
        {content.badge ? (
          <div>
            <img
              alt="MIT License"
              src="https://img.shields.io/badge/license-MIT-a3be8c"
              className="shadow"
            />
          </div>
        ) : null}
      </Box>
      <Box my="md">
        {content.body.map((element, index) => (
          <Paragraph key={index}>
            {parse(element)}
          </Paragraph>
        ))}
      </Box>
      <CardFooter content={content} />
    </Card>
  );
}

function CardFooter({ content }) {
  return (
    <List>
      {content.links.map((link, index) => (
        <li key={index}>
          <Anchor href="${link.url}" color="purple" hoverColor="pink" target="_blank" rel="noopener noreferrer">
            {parse(link.text)}
          </Anchor>
        </li>
      ))}
    </List>
  );
}
