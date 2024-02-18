import "./Games.css";
import React from "react";
import Tetromino from "../../src/content/games/tetromino";
import CardItem from "../CardItem/CardItem";
import Sand from "../../src/content/games/sand";
import OfflineSpyfall from "../../src/content/games/off-spyfall";
import OfflineWolf from "../../src/content/games/off-wolf";
import Renard from "../../src/content/games/renard";
import Spyfall from "../../src/content/games/spyfall";
import { Box } from "dracula-ui";

function Games() {
  return (
    <Box mt="xs" className="games-container">
      <CardItem content={Sand} />
      <CardItem content={Spyfall} />
      <CardItem content={Renard} />
      <CardItem content={Tetromino} />
      <CardItem content={OfflineSpyfall} />
      <CardItem content={OfflineWolf} />
    </Box>
  );
}

export default Games;
