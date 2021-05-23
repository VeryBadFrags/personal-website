import React from "react";

function Contact() {
  return (
    <div className="row row-cols-1 row-cols-lg-2 gy-4 mb-4">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fas fa-address-book"></i> Contact
            </h5>
            <p className="card-text">
              <i className="far fa-envelope"></i>{" "}
              <a href="mailto:contact@vour.ch">contact@vour.ch</a>
            </p>
          </div>
        </div>
      </div>

      <div className="col d-flex justify-content-center">
        <figure>
          <img src="qr.svg" alt="QR Code to this page" height="256" />
          <figcaption className="text-center">
            Link to this page
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Contact;
