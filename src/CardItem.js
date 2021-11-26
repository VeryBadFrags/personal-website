import React from "react";
import parse from "html-react-parser";
import "./CardItem.css";
import { Anchor, Box, Card, Heading, List, Paragraph } from "@dracula/dracula-ui";

export default function CardItem({ content }) {
  return (
    <Card variant="subtle" color="cyan" className="col-item" p="sm" mb="lg" height="xs">
      <CardHeader content={content} />
      <CardBody content={content} />
      <CardFooter content={content} />
    </Card>
  );
}

function CardHeader({ content }) {
  return (
    <Box display="flex" id="card-title">
      <Heading as="h3" color="cyan">
        {parse(content.icon)} <span className="drac-text-cyan-green">{content.title}</span>
      </Heading>
      {content.badge ? (
        <Box>
          <img alt="MIT License" src="https://img.shields.io/badge/license-MIT-a3be8c" />
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
          <Anchor
            href={link.url}
            color="orange"
            hoverColor="purple"
            target="_blank"
            rel="noopener noreferrer"
          >
            {parse(link.text)}
          </Anchor>
        </li>
      ))}
    </List>
  );
}
