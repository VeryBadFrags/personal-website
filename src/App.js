import React from "react";
import "./App.scss";
import Links from "./Links";
import Games from "./Games";
import Contact from "./Contact";
import Section from "./Section";
import GithubCorner from "react-github-corner";

function App() {
  return (
    <div className="container">
      <h1 className="pt-2 mb-4">Loic Vourch - Software Engineer</h1>

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
      <GithubCorner href="https://github.com/VeryBadFrags/personal-website" octoColor="#ECEFF4" bannerColor="#5E81AC" />
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
