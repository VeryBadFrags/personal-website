import { Box, Heading } from "@dracula/dracula-ui";
import React from "react";

export default function Section({ icon, title, children }) {
  return (
    <Box my="lg">
      {title ? (
        <Heading as="h2" size="xl" color="pink">
          {icon} <span className="drac-text-pink-purple">{title}</span>
        </Heading>
      ) : null}
      {children}
    </Box>
  );
}
