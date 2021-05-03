import React from "react";

function Contact() {
  return (
    <div className="row row-cols-1 row-cols-lg-2 gy-4 mb-4">
      <div className="col">
        <div className="card text-white bg-dark">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fas fa-address-book"></i> Contact
            </h5>
            <p className="card-text">
              <i className="far fa-envelope"></i>{" "}
              <a href="mailto:contact@vour.ch">contact@vour.ch</a>
            </p>
            <p className="card-text">
              <i className="fas fa-lock"></i>{" "}
              <a href="loic_vourch_97E49997_public.asc">PGP Public Key</a>
            </p>
            <p className="card-text">
              <i className="fas fa-fingerprint"></i>{" "}
              <code>0618 88F5 487E 27EC E503 C583 302C 7E47 97E4 9997</code>
            </p>
          </div>
        </div>
      </div>

      <div className="col d-flex justify-content-center">
        <figure>
          <img src="qr.svg" alt="QR Code to this page" height="256" />
          <figcaption className="text-light text-center">
            Link to this page
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Contact;
