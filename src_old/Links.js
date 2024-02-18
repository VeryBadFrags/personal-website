import React from "react";
import { Anchor, List } from "dracula-ui";
import { FaGithub, FaLinkedin, FaNewspaper, FaYoutube } from "react-icons/fa";

function Links() {
  return (
    <List>
      {linksList.map((link, index) => (
        <li key={index}>
          <Anchor
            href={link.url}
            color="green"
            hoverColor="purple"
            size="lg"
            // target="_blank"
            // rel="noopener noreferrer"
            isExternal="true"
            key={index}
          >
            {link.icon} {link.text}
          </Anchor>
        </li>
      ))}
    </List>
  );
}

const linksList = [
];

export default Links;
