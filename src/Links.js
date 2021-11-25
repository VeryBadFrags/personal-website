import React from "react";
import parse from "html-react-parser";
import { Anchor, List, Text } from "@dracula/dracula-ui";

function Links() {
  return (
    <List>
      {linksList.map((link, index) => (
        <li key={index}>
          <Anchor
            href={link.url}
            color="cyan"
            hoverColor="purple"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            {parse(link.icon)}{" "}
            <Text color="yellowPink" size="lg">
              {link.text}
            </Text>
          </Anchor>
        </li>
      ))}
    </List>
  );
}

const linksList = [
  {
    url: "https://www.linkedin.com/in/loicvourch/",
    icon: '<i class="fab fa-linkedin"></i>',
    text: "LinkedIn",
  },
  {
    url: "https://github.com/VeryBadFrags",
    icon: '<i class="fab fa-github"></i>',
    text: "GitHub",
  },
  {
    url: "https://blog.verybadfrags.com",
    icon: '<i class="far fa-newspaper"></i>',
    text: "Blog",
  },
  {
    url: "https://www.instagram.com/loicvourch/",
    icon: '<i class="fab fa-instagram"></i>',
    text: "Instagram",
  },
  {
    url: "https://www.youtube.com/channel/UCWRocYB0ymy1A3p2a_VQAAg",
    icon: '<i class="fab fa-youtube"></i>',
    text: "Music",
  },
];

export default Links;
