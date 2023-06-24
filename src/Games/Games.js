import "./Games.css";
import React from "react";
import Tetromino from "../content/tetromino";
import CardItem from "../CardItem/CardItem";
import Sand from "../content/sand";
import OfflineSpyfall from "../content/off-spyfall";
import OfflineWolf from "../content/off-wolf";
import Renard from "../content/renard";
import Spyfall from "../content/spyfall";
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
