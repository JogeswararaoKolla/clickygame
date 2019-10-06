import React from "react";
import "../App.css";
import CardItem from "./CardItem.js";

function Card(props) {
  return (
    <div className="Card">
      {props.cards.map(element => (
        <CardItem
          key={element.id}
          carditem={element}
          carditemclick={props.ClickCount}
        />
      ))}
    </div>
  );
}

export default Card;
