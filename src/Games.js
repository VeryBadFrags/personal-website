import Card from "./Card";
import Spyfall from "./content/spyfall";
import Renard from "./content/renard";
import OfflineWolf from "./content/off-wolf";
import OfflineSpyfall from "./content/off-spyfall";
import Blocks from "./content/blocks";

function Games() {
  return (
    <div className="mb-5">
      <h2 className="text-white">
        <i className="fas fa-gamepad"></i> Games
      </h2>

      <div className="row">
        <Card content={Spyfall} />
      </div>

      <div className="row row-cols-1 row-cols-lg-2">
        <Card content={Renard} />

        <Card content={OfflineWolf} />

        <Card content={OfflineSpyfall} />

        <Card content={Blocks} />
      </div>
    </div>
  );
}

export default Games;
