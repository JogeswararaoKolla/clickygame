import React from "react";

const CardItem = props => {
  return (
    <div>
      <img
        style={{
          height: "160px",
          width: "160px",
          textAlign: "center",
          border: "2px solid",
          margin: "0px"
        }}
        src={props.carditem.img}
        id={props.carditem.id}
        alt="image"
        onClick={event => {
          //console.log(event.target.id);
          event.preventDefault();
          props.carditemclick(props.carditem.id);
        }}
      />
    </div>
  );
};

export default CardItem;
