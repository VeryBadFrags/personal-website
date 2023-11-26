import "./CardItem.css";
import React from "react";
import parse from "html-react-parser";
import { Box, Button, Card, Heading, List, Paragraph } from "dracula-ui";

export default function CardItem({ content }) {
  return (
    <Card
      variant="subtle"
      // color="cyan"
      borderColor="purple"
      p="sm"
      mb="md"
      className="card-item"
    >
      <CardHeader content={content} />
      <CardBody content={content} />
      <CardFooter content={content} />
    </Card>
  );
}

function CardHeader({ content }) {
  return (
    <Box display="flex" className="card-title">
      <Heading as="h3" color="cyan">
        {parse(content.icon)}{" "}
        <span className="drac-text-cyan-green">{content.title}</span>
      </Heading>
      {content.badge ? (
        <Box>
          <img
            alt="MIT License"
            src="https://img.shields.io/badge/license-MIT-9580ff"
          />
        </Box>
      ) : null}
    </Box>
  );
}

function CardBody({ content }) {
  return (
    <Box m="xs">
      {content.body.map((element, index) => (
        <Paragraph pb="sm" key={index}>
          {parse(element)}
        </Paragraph>
      ))}
    </Box>
  );
}

function CardFooter({ content }) {
  return (
    <List>
      {content.links.map((link, index) => (
        <li key={index}>
          <Button
            as="a"
            href={link.url}
            color="cyanGreen"
            mb="xs"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {parse(link.text)}
          </Button>
        </li>
      ))}
    </List>
  );
}
