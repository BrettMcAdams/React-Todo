import React from "react";

const Item = (props) => {
  return (
    <div 
        onClick={() => props.toggleDone(props.item.id)}
        className={`${props.item.done ? "done" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;