import { Box, Heading } from "@dracula/dracula-ui";
import React from "react";

export default function Section({ icon, title, children }) {
  return (
    <Box my="sm">
      {title ? (
        <Heading size="xl" color="cyanGreen" py="sm">
          <i className={icon} /> {title}
        </Heading>
      ) : null}
      {children}
    </Box>
  );
}
