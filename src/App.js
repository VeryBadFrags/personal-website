import React from "react";
import "./App.scss";
import Links from "./Links";
import Games from "./Games";
import Contact from "./Contact";
import Section from "./Section";

function App() {
  return (
    <div className="container">
      <h1 className="text-white pt-2 mb-4">Loic Vourch - Software Engineer</h1>

      <Section>
        <Links />
      </Section>

      <Section>
        <Games />
      </Section>

      <hr className="my-4" />

      <Section>
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <p>
      <a href="https://github.com/VeryBadFrags/personal-website">
        <i className="fas fa-code"></i> Source code</a>
    </p>
  );
}

export default App;
