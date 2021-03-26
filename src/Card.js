export default function Card({ content }) {
  return (
    <div className="card">
      <div className="card-title">
        {content.icons?.map((icon) => (
          <i className={icon}></i>
        ))}{" "}
        {content.title}
      </div>
      <div className="card-body">
        {content.body.map((element) => (
          <p>{element}</p>
        ))}
      </div>
      <CardFooter content={content} />
    </div>
  );
}

function CardFooter({ content }) {
  return (
    <div className="card-footer">
      <ul className="list-group list-group-horizontal border-0">
        {content.links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item list-group-item-action border-0"
          >
            <i className={link.icon}></i> {link.text}
          </a>
        ))}
        {content.badge ? (
          <li className="list-group-item border-0">
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
