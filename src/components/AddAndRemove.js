import React, { useState } from "react";
// import Beers from "./pages/Beers";

export default function AddAndRemove(props) {
  const [number, setNumber] = useState(0);

  function subtract() {
    console.log("subtract");
    if (number > 0) {
      setNumber(number - 1);
      props.setTotal(props.total - props.price);
      props.removeFromCart(props.beer);
    }
  }

  function add() {
    console.log("add");
    setNumber(number + 1);
    props.setTotal(props.total + props.price);
    props.addToCart(props.beer);
  }

  return (
    <div className="add-remove-button">
      <button className={number > 0 ? "button-clicked" : ""} onClick={subtract}>
        -
      </button>
      <div className="number"> {number}</div>
      <button className={number > 0 ? "button-clicked" : ""} onClick={add}>
        +
      </button>
    </div>
  );
}
