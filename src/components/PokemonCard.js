import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon: {id, name, hp, sprites:{front, back}}}) {
  const [showFront, setShowFront] = useState(true)

  function handleClick(){
      setShowFront(!showFront)
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={showFront? front: back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
