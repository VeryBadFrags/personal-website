import React from "react";
import parse from "html-react-parser";
import { Anchor, List } from "@dracula/dracula-ui";

function Links() {
  return (
    <List>
      {linksList.map((link, index) => (
        <li key={index}>
        <Anchor
          href={link.url}
          color="purple" hoverColor="pink"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {parse(link.text)}
        </Anchor>
        </li>
      ))}
    </List>
  );
}

const linksList = [
  {
    url: "https://www.linkedin.com/in/loicvourch/",
    text: '<i class="fab fa-linkedin"></i> LinkedIn',
  },
  {
    url: "https://github.com/VeryBadFrags",
    text: '<i class="fab fa-github"></i> GitHub',
  },
  {
    url: "https://blog.verybadfrags.com",
    text: '<i class="far fa-newspaper"></i> Blog',
  },
  {
    url: "https://www.instagram.com/loicvourch/",
    text: '<i class="fab fa-instagram"></i> Instagram',
  },
  {
    url: "https://www.youtube.com/channel/UCWRocYB0ymy1A3p2a_VQAAg",
    text: '<i class="fab fa-youtube"></i> Music',
  },
];

export default Links;
