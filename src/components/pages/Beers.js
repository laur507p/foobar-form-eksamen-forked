import React, { useState, useEffect } from "react";
import AddAndRemove from "../AddAndRemove";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { get, getHerokuData } from "../../modules/rest";
import Window from "../Window";

function BeersList(props) {
  const [Beers, setBeers] = useState([]);
  const [taps, setTaps] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    get(setBeers);
    getHerokuData(setTaps);
  }, []);

  useEffect(() => {
    const tempCart = taps.map((beer) => {
      return {
        name: beer.beer,
        amount: 0,
      };
    });
    setCart(tempCart);
  }, [taps]);

  function filterAvailableTaps() {
    console.log("filterAvailableTaps");

    if (Beers.length === 0) {
      return [];
    }
    let available = [];
    taps.forEach((tap) => {
      Beers.forEach((beer) => {
        if (tap.beer === beer.name) {
          if (available.filter((item) => item.name === beer.name).length === 0) {
            available.push(beer);
          }
        }
      });
    });

    return available;
  }
  const available = filterAvailableTaps();
  console.log("available", available);

  function addToCart(beer) {
    console.log("addToCart");

    const nextCart = cart.map((item) => {
      if (item.name === beer) {
        console.log("fandt øl");
        item.amount = item.amount + 1;
      }
      return item;
    });

    setCart(nextCart);
    // console.log("nextCart", nextCart);
  }

  function removeFromCart(beer) {
    console.log("removeFromCart");
    // console.log(beer);

    const nextCart = cart.map((item) => {
      if (item.name === beer) {
        console.log("minus øl");
        item.amount = item.amount - 1;
      }
      return item;
    });

    setCart(nextCart);
  }
  const finalCart = [];
  function submitOrder() {
    console.log("submitOrder");
    const nextCart = cart.map((item) => {
      if (item.amount > 0) {
        finalCart.push(item);
      }
      return item;
    });

    // console.log("finalCart", finalCart);

    setCart(nextCart);

    console.log("submitOrdernextCart", nextCart);
    // console.log("finalCart", finalCart);
    // store the current order in localstorage

    localStorage.setItem("currentCart", JSON.stringify(finalCart));
    // post(nextCart);
    // const createBox = props.createBox;
  }

  function callFunctions() {
    console.log("callFunctions");
    submitOrder();
    props.createBox();
  }

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
      <div className="window-container">
        <h2>Beers</h2>
        <ul>
          {available.map((data) => (
            <li key={data.id}>
              <div className="li-text">
                <div className="top-section">
                  <h3>
                    {data.name} - <span className="beer-price">{data.price} DKK</span>
                  </h3>
                  {/* <p>{data.price}</p> */}
                </div>
                <p>{data.description}</p>
              </div>
              <div className="li-info">
                <AddAndRemove
                  price={data.price}
                  total={total}
                  setTotal={setTotal}
                  beer={data.name}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-section">
        <p>Total: {total} DKK</p>
        {/* <button onClick={submitOrder}>Continue</button> */}
        <Link className="form-button" onClick={callFunctions} to="/payment">
          TO PAYMENT
        </Link>
        {/* <Cart
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        beer={data.name}
      /> */}
      </div>
    </motion.section>
  );
}

export default BeersList;
