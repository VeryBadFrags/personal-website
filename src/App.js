import '@dracula/dracula-ui/styles/dracula-ui.css'
import { Divider, Paragraph } from '@dracula/dracula-ui'
import React from "react";
import "./App.scss";
import Links from "./Links";
import Games from "./Games";
import Contact from "./Contact";
import Section from "./Section";

function App() {
  return (
    <div className="container drac-bg-black">
      <h1 className="pt-2 mb-4">Loic Vourch - Software Engineer</h1>
      <Paragraph color="black">Hello Vampire</Paragraph>
      <Section icon="fas fa-link" title="Links">
        <Links />
      </Section>

      <Section icon="fas fa-gamepad" title="Games">
        <Games />
      </Section>

      <Divider />

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
    </p>
  );
}

export default App;
