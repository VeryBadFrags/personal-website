import React from "react";
import { Anchor, List } from "@dracula/dracula-ui";
import { FaGithub, FaInstagram, FaLinkedin, FaNewspaper, FaYoutube } from 'react-icons/fa';

function Links() {
  return (
    <List>
      {linksList.map((link, index) => (
        <li key={index}>
          <Anchor
            href={link.url}
            color="orange"
            hoverColor="purple"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
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
  {
    url: "https://www.linkedin.com/in/loicvourch/",
    icon: <FaLinkedin />,
    text: "LinkedIn",
  },
  {
    url: "https://github.com/VeryBadFrags",
    icon: <FaGithub />,
    text: "GitHub",
  },
  {
    url: "https://blog.verybadfrags.com",
    icon: <FaNewspaper />,
    text: "Blog",
  },
  {
    url: "https://www.instagram.com/loicvourch/",
    icon: <FaInstagram />,
    text: "Instagram",
  },
  {
    url: "https://www.youtube.com/channel/UCWRocYB0ymy1A3p2a_VQAAg",
    icon: <FaYoutube />,
    text: "Music",
  },
];

export default Links;
