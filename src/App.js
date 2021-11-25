import "@dracula/dracula-ui/styles/dracula-ui.css";
import { Box, Divider, Heading } from "@dracula/dracula-ui";
import React from "react";
import "./App.scss";
import Links from "./Links";
import Games from "./Games";
import Contact from "./Contact";
import Section from "./Section";

function App() {
  return (
    <Box p="md">
      <Heading as="h1" size="2xl" color="purpleCyan">
        Loic Vourch - Software Engineer
      </Heading>

      <Section icon="fas fa-link" title="Links">
        <Links />
      </Section>

      <Divider />

      <Section icon="fas fa-gamepad" title="Games">
        <Games />
      </Section>

      <Box mb="sm">
        <Divider color="orange" />
      </Box>

      <Section>
        <Contact />
      </Section>

      <Footer />
    </Box>
  );
}

function Footer() {
  return <Box></Box>;
}

export default App;
