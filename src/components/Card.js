import React from "react";

function Card(props) {
  return (
    <div style={{ flexBasis: "20%" }}>
      <img
        style={{ height: "150px", width: "150px" }}
        src={props.src}
        onClick={() => props.ClickCount()}
      />
    </div>
  );
}

export default Card;
