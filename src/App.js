import React from "react";
import "./App.scss";
import Links from "./Links";
import Games from "./Games";
import Contact from "./Contact";

function App() {
  return (
    <div className="container">
      <h1 className="text-white pt-2 mb-5">Loic Vourch - Software Engineer</h1>

      <Links />
      <Games />
      <hr />
      <Contact />
      <Footer />
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
