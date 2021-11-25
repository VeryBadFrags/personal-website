import React from "react";
import CardItem from "./Card";
import Sand from "./content/sand";
import Spyfall from "./content/spyfall";
import Renard from "./content/renard";
import OfflineWolf from "./content/off-wolf";
import OfflineSpyfall from "./content/off-spyfall";
import Blocks from "./content/blocks";
import { Box } from "@dracula/dracula-ui";

function Games() {
  return (
    <Box className="row row-cols-1 row-cols-lg-2 gy-4">
      <CardItem content={Sand} />
      <CardItem content={Spyfall} />
      <CardItem content={Renard} />
      <CardItem content={OfflineWolf} />
      <CardItem content={OfflineSpyfall} />
      <CardItem content={Blocks} />
    </Box>
  );
}

export default Games;
