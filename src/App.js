import "./App.scss";
import Games from "./Games";

function App() {
  return (
    <div className="container">
      <h1 className="mb-4">Loic Vourch - Software Engineer</h1>

      <Links />

      <Games />
      <hr />
      <Contact />

      <Footer />
    </div>
  );
}

function Links() {
  return (
    <div className="mb-4">
      <h2 className="text-light">
        <i className="fas fa-link"></i> Links
      </h2>

      <div className="list-group">
        <a
          href="https://www.linkedin.com/in/loicvourch/"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/VeryBadFrags"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://blog.verybadfrags.com"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action"
        >
          <i className="far fa-newspaper"></i> Blog
        </a>
        <a
          href="https://www.instagram.com/loicvourch/"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UCWRocYB0ymy1A3p2a_VQAAg"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action"
        >
          <i className="fab fa-youtube"></i> Music
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="row row-cols-1 row-cols-xl-2 mb-4">
      <div className="col">
        <div className="card border-primary">
          <div className="card-header">
            <i className="fas fa-address-book"></i> Contact
          </div>
          <div className="card-body">
            <p>
              <i className="far fa-envelope"></i>{" "}
              <a href="mailto:contact@vour.ch">contact@vour.ch</a>
            </p>
            <p>
              <i className="fas fa-lock"></i>{" "}
              <a href="loic_vourch_97E49997_public.asc">PGP Public Key</a>
            </p>
            <p>
              <i className="fas fa-fingerprint"></i>{" "}
              <code>0618 88F5 487E 27EC E503 C583 302C 7E47 97E4 9997</code>
            </p>
          </div>
        </div>
      </div>

      <div class="col d-flex justify-content-center">
        <img src="qr.svg" alt="QR Code to this page" width="256" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <p>
        <a href="https://github.com/VeryBadFrags/personal-website">
          <i className="fas fa-code"></i> Source code for this page
        </a>
      </p>
    </>
  );
}

export default App;
