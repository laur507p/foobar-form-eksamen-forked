import React from "react";
import { motion } from "framer-motion";
import Window from "../Window";
import { Link } from "react-router-dom";

export default function Confirmation(props) {
  return (
    <motion.section
      style={{ position: "absolute" }}
      initial="initial"
      exit="out"
      animate="in"
      variants={props.pageVariants}
      transition={props.pageTransition}
      className="screen"
    >
      <Window />
      <div className="window-container large_text">
        <h1>
          YOU'RE <br /> DONE!
        </h1>
        <p className="confirmation-p">
          Sit tight, a waiter will bring your order over to your table!{" "}
        </p>
        <Link
          to="/"
          className="confirm-button"
          onClick={props.clearProgressBar}
        >
          <h3>ORDER MORE BEER</h3>
        </Link>
      </div>
    </motion.section>
  );
}
