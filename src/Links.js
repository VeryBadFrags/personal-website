import React from "react";
import parse from "html-react-parser";

function Links() {
  return (
    <>
      <h2>
        <i className="fas fa-link"></i> Links
      </h2>

      <div className="list-group">
        {linksList.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item list-group-item-action"
            key={index}
          >
            {parse(link.text)}
          </a>
        ))}
      </div>
    </>
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
