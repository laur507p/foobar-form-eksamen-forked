import React, { useState } from "react";
import Form from "../Form";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Window from "../Window";
import { post } from "../../modules/rest";

export default function FormPage(props) {
  // current order to submit with form!
  const currentCart = localStorage.getItem("currentCart");
  //const [isFormValid, setIsFormValid] = useState(false);

  // function formValid() {
  //   const form = document.querySelector("form");
  //   console.log(form.checkValidity());
  // }

  const cartArray = JSON.parse(currentCart);
  console.log("cartArray", cartArray);
  function callFunctions() {
    const postFunction = () => post(cartArray);
    props.createBox();
  }

  return (
    <motion.section
      style={{ position: "absolute" }}
      exit="out"
      animate="in"
      initial="initial"
      variants={props.pageVariants}
      transition={props.pageTransition}
      className="screen"
      id="form"
    >
      <Window />
      <div className="window-container window-reset">
        <Link className="edit-order-button" to="/beers">
          EDIT ORDER
        </Link>
        <form className="form-container">
          <Form />

          {/* <Link to="/confirmation" className={number > 0 ? "button-clicked" : ""} onClick={callFunctions}> */}
        </form>
        <Link to="/confirmation" className="confirm-button" onClick={callFunctions}>
          <button id="confirmbutton" type="submit">
            CONFIRM ORDER
          </button>
        </Link>
      </div>
    </motion.section>
  );
}
