import React from "react";
import parse from "html-react-parser";
import { Box, Card, List, Text } from "@dracula/dracula-ui";

export default function CardItem({ content }) {
  return (
    <Box>
      <Card rounded="lg" color="purpleCyan" p="md">
        <div className="card-header d-flex justify-content-between">
          <Text>{parse(content.title)}</Text>
          {content.badge ? (
            <div>
              <img
                alt="MIT License"
                src="https://img.shields.io/badge/license-MIT-a3be8c"
                className="shadow"
              />
            </div>
          ) : null}
        </div>
        <Text>
          {content.body.map((element, index) => (
            <p className="card-text" key={index}>
              {parse(element)}
            </p>
          ))}
        </Text>
        <CardFooter content={content} />
      </Card>
    </Box>
  );
}

function CardFooter({ content }) {
  return (
    <List>
      {content.links.map((link, index) => (
        <li className="drac-text drac-text-white" key={index}>
          {parse(link)}
        </li>
      ))}
    </List>
  );
}
