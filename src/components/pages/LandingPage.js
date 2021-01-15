import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Window from "../Window";

export default function LandingPage(props) {
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
          WELCOME
          <br /> TO
          <br />
          FOOBAR
        </h1>
        <Link to="/beers" className="confirm-button" onClick={props.showProgressbar}>
          <h3>LET’S GET STARTED</h3>
        </Link>
      </div>
    </motion.section>
  );
}
