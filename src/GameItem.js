import React from "react";
import parse from "html-react-parser";
import { Box, Card, Heading, List, Paragraph } from "@dracula/dracula-ui";

export default function CardItem({ content }) {
  return (
    <Card rounded="lg" color="cyan" p="md">
      <Box className="d-flex justify-content-between">
        <Heading as="h3">{parse(content.title)}</Heading>
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
      <Paragraph my="md">
        {content.body.map((element, index) => (
          <p className="card-text" key={index}>
            {parse(element)}
          </p>
        ))}
      </Paragraph>
      <CardFooter content={content} />
    </Card>
  );
}

function CardFooter({ content }) {
  return (
    <List>
      {content.links.map((link, index) => (
        <li className="drac-text drac-text-white" key={index}>
          <a href="${link.url}" target="_blank" rel="noopener noreferrer">
            {parse(link.text)}
          </a>
        </li>
      ))}
    </List>
  );
}
