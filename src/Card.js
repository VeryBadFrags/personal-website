import React from "react";
import parse from "html-react-parser";

export default function Card({ content }) {
  return (
    <div className="col mb-4">
      <div className="card text-white bg-dark">
        <div className="card-header d-flex justify-content-between">
          <div>{parse(content.title)}</div>
          {content.badge ? (
            <div>
              <img
                alt="MIT License"
                src="https://img.shields.io/badge/license-MIT-green"
                className="shadow"
              />
            </div>
          ) : null}
        </div>
        <div className="card-body">
          {content.body.map((element, index) => (
            <p className="card-text" key={index}>
              {parse(element)}
            </p>
          ))}
        </div>
        <CardFooter content={content} />
      </div>
    </div>
  );
}

function CardFooter({ content }) {
  return (
    <ul className="list-group list-group-flush">
      {content.links.map((link, index) => (
        <li className="list-group-item list-group-item-action text-white bg-dark" key={index}>
          {parse(link)}
        </li>
      ))}
    </ul>
  );
}
