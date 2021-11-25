import React from "react";
import CardItem from "./CardItem";
import Sand from "./content/sand";
import Spyfall from "./content/spyfall";
import Renard from "./content/renard";
import OfflineWolf from "./content/off-wolf";
import OfflineSpyfall from "./content/off-spyfall";
import Blocks from "./content/blocks";
import { Box } from "@dracula/dracula-ui";

function Games() {
  return (
    <Box className="col-container">
      <CardItem content={Sand} />
      <CardItem content={Spyfall} />
      <CardItem content={Renard} />
      <CardItem content={Blocks} />
      <CardItem content={OfflineSpyfall} />
      <CardItem content={OfflineWolf} />
    </Box>
  );
}

export default Games;
