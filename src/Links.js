function Links() {
  return (
    <div className="mb-5">
      <h2 className="text-white">
        <i className="fas fa-link"></i> Links
      </h2>

      <div className="list-group">
        <a
          href="https://www.linkedin.com/in/loicvourch/"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action text-white bg-dark"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/VeryBadFrags"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action text-white bg-dark"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://blog.verybadfrags.com"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action text-white bg-dark"
        >
          <i className="far fa-newspaper"></i> Blog
        </a>
        <a
          href="https://www.instagram.com/loicvourch/"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action text-white bg-dark"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UCWRocYB0ymy1A3p2a_VQAAg"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action text-white bg-dark"
        >
          <i className="fab fa-youtube"></i> Music
        </a>
      </div>
    </div>
  );
}

export default Links;
