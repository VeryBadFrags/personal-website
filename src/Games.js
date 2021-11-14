import React from "react";
import Card from "./Card";
import Sand from "./content/sand";
import Spyfall from "./content/spyfall";
import Renard from "./content/renard";
import OfflineWolf from "./content/off-wolf";
import OfflineSpyfall from "./content/off-spyfall";
import Blocks from "./content/blocks";

function Games() {
  return (
    <>
      <h2>
        <i className="fas fa-gamepad"></i> Games
      </h2>

      <div className="row row-cols-1 row-cols-lg-2 gy-4">
        <Card content={Sand} />
        <Card content={Spyfall} />
        <Card content={Renard} />
        <Card content={OfflineWolf} />
        <Card content={OfflineSpyfall} />
        <Card content={Blocks} />
      </div>
    </>
  );
}

export default Games;
