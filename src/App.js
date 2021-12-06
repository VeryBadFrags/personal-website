import "@dracula/dracula-ui/styles/dracula-ui.css";
import { Box, Divider, Heading } from "@dracula/dracula-ui";
import React from "react";
import "./App.scss";
import Links from "./Links";
import Games from "./Games";
import Contact from "./Contact";
import Section from "./Section";
import { FaGamepad, FaLink } from 'react-icons/fa';

function App() {
  return (
    <Box p="sm">
      <Heading as="h1" size="2xl" color="purpleCyan">
        Loic Vourch - Software Engineer
      </Heading>

      <Section title="Links" icon={<FaLink />}>
        <Links />
      </Section>

      <Section title="Games" icon={<FaGamepad />}>
        <Games />
      </Section>

      <Divider color="purple" />

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
