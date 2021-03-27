import parse from "html-react-parser";

export default function Card({ content }) {
  return (
    <div className="col mb-4">
      <div className="card">
        <div className="card-header">{parse(content.title)}</div>
        <div className="card-body">
          {content.body.map((element, index) => (
            <p key={index}>{parse(element)}</p>
          ))}
        </div>
        <CardFooter content={content} />
      </div>
    </div>
  );
}

function CardFooter({ content }) {
  return (
    <div className="card-footer">
      <ul className="list-group list-group-horizontal justify-content-center">
        {content.links.map((link, index) => (
          <li className="list-group-item" key={index}>
            {parse(link)}
          </li>
        ))}
        {content.badge ? (
          <li className="list-group-item">
            <img
              alt="MIT License"
              src="https://img.shields.io/badge/license-MIT-green"
            />
          </li>
        ) : null}
      </ul>
    </div>
  );
}
