import "./App.css";
import Card from "./Card";
import Spyfall from "./content/spyfall";
import Renard from "./content/renard";
import OfflineWolf from "./content/off-wolf";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Loic Vourch - Software Engineer</h1>

        <h3>
          <i className="fas fa-link"></i> Links
        </h3>
        <ul className="collection blue-grey darken-1">
          <li className="collection-item blue-grey darken-1">
            <a
              href="https://www.linkedin.com/in/loicvourch/"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-text text-accent-2"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li className="collection-item blue-grey darken-1">
            <a
              href="https://github.com/VeryBadFrags"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-text text-accent-2"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li className="collection-item blue-grey darken-1">
            <a
              href="https://blog.verybadfrags.com"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-text text-accent-2"
            >
              <i className="far fa-newspaper"></i> Blog
            </a>
          </li>
          <li className="collection-item blue-grey darken-1">
            <a
              href="https://www.instagram.com/loicvourch/"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-text text-accent-2"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li className="collection-item blue-grey darken-1">
            <a
              href="https://www.youtube.com/channel/UCWRocYB0ymy1A3p2a_VQAAg"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-text text-accent-2"
            >
              <i className="fab fa-youtube"></i> Music
            </a>
          </li>
        </ul>

        <h3>
          <i className="fas fa-gamepad"></i> Games
        </h3>

        <div className="row">
          <div className="col mb-3">
            <Card content={Spyfall} />
          </div>
        </div>

        <div className="row row-cols-2">
          <div className="col mb-3">
            <Card content={Renard} />
          </div>

          {/* <!-- Offline Werewolf --> */}
          <div className="col">
            <Card content={OfflineWolf} />
          </div>

          {/* <!-- Offline Spyfall --> */}
          <div className="col s12 xl6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  📵<i className="fas fa-user-secret"></i> Offline Spyfall
                </span>
                <p>
                  A server-free, standalone game inspired by Spyfall that can be
                  played without an internet connection.
                </p>
                <p>
                  (<i className="fab fa-js" aria-hidden="true"></i> JavaScript)
                </p>
              </div>
              <div className="card-action">
                <a href="https://offline-spy.verybadfrags.com">
                  <i className="fas fa-play-circle"></i> Play the game
                </a>
                <a
                  href="https://github.com/VeryBadFrags/offline-spy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code"></i> Source code
                </a>
                <span className="badge">
                  <img
                    alt="MIT License"
                    src="https://img.shields.io/badge/license-MIT-green"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Blocks --> */}
          <div className="col s12 xl6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">🧱 Blocks</span>
                <p>That tetromino game.</p>
                <p>
                  (<i className="fab fa-js" aria-hidden="true"></i> JavaScript)
                </p>
              </div>
              <div className="card-action">
                <a href="https://blocks.verybadfrags.com">
                  <i className="fas fa-play-circle"></i> Play the game
                </a>
                <a
                  href="https://github.com/VeryBadFrags/blocks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code"></i> Source code
                </a>
                <span className="badge">
                  <img
                    alt="MIT License"
                    src="https://img.shields.io/badge/license-MIT-green"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <h3>Contact</h3>
        <p>
          <i className="far fa-envelope"></i>
          <a href="mailto:contact@vour.ch">contact@vour.ch</a>
        </p>
        <p>
          <i className="fas fa-lock"></i>
          <a href="loic_vourch_97E49997_public.asc">PGP Public Key</a>
        </p>
        <p>
          <i className="fas fa-fingerprint"></i>
          <code>0618 88F5 487E 27EC E503 C583 302C 7E47 97E4 9997</code>
        </p>
        <div className="divider"></div>
        <br />
        <img src="qr.svg" alt="QR Code to this page" width="256" />

        <p>
          <a href="https://github.com/VeryBadFrags/personal-website">
            <i className="fas fa-code"></i> Source code for this page
          </a>
        </p>
      </div>
      <script src="main.js"></script>
    </div>
  );
}

export default App;
