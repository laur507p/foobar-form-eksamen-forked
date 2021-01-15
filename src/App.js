import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import FormPage from "./components/pages/FormPage";
import LandingPage from "./components/pages/LandingPage";
import Beers from "./components/pages/Beers";
import Confirmation from "./components/pages/Confirmation";
import ProgressBar from "./components/ProgressBar";

// animations

import { AnimatePresence } from "framer-motion";

function App() {
  let date = new Date();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let currentTime = hours + ":" + minutes;
  let day = date.getDay();
  let currentDay;

  if (day === 1) {
    currentDay = "Mon";
  } else if (day === 2) {
    currentDay = "Tue";
  } else if (day === 3) {
    currentDay = "Wed";
  } else if (day === 4) {
    currentDay = "Thu";
  } else if (day === 5) {
    currentDay = "Fri";
  } else if (day === 6) {
    currentDay = "Sat";
  } else if (day === 7) {
    currentDay = "Sun";
  }

  // animation settings that are sent down to the 4 pages
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vh",
      scale: 1.2,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vh",
      scale: 0.8,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  // location used for the animation
  const location = useLocation();

  // Array of themes
  const themes = ["80s-dream", "Vortex", "Pastel-heaven"];

  const user = {
    theme: "80s-dream",
  };

  const changeTheme = (e) => {
    user.theme = e.target.value;

    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${user.theme}`);
  };

  //Progress bar animation
  const createBox = () => {
    console.log("createBox");
    if (window.innerWidth > 600) {
      for (let i = 0; i < 25; i++) {
        task(i);
      }
    } else {
      for (let i = 0; i < 14; i++) {
        task(i);
      }
    }
  };
  function task(i) {
    setTimeout(function () {
      console.log("task");
      const box = document.createElement("div");
      box.classList.add("progressbox");

      document.getElementById("progressbar").appendChild(box);
    }, 50 * i);
  }

  function clearProgressBar() {
    console.log("clearProgressBar");
    document.getElementById("progressbar").innerHTML = "";
    document.getElementById("navigation").classList.add("hide");
  }

  function showProgressbar() {
    console.log("showProgressbar");
    document.getElementById("navigation").classList.remove("hide");
  }

  return (
    <main id="main-wrapper">
      <header id="top-header">
        <div>
          <h1>
            FooBar <span id="smiley">G</span>
          </h1>
        </div>
        <div>
          <p id="time">
            {currentDay} {currentTime}
          </p>
          <select defaultValue={user.theme} onChange={changeTheme}>
            {themes.map((theme, index) => (
              <option value={theme} key={index}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </header>

      <ProgressBar />

      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route
            path="/"
            exact
            render={() => <LandingPage pageTransition={pageTransition} pageVariants={pageVariants} showProgressbar={showProgressbar} />}
          />
          <Route path="/beers" render={() => <Beers pageTransition={pageTransition} pageVariants={pageVariants} createBox={createBox} />} />
          <Route path="/payment" render={() => <FormPage pageTransition={pageTransition} pageVariants={pageVariants} createBox={createBox} />} />
          <Route
            path="/confirmation"
            render={() => <Confirmation pageTransition={pageTransition} pageVariants={pageVariants} clearProgressBar={clearProgressBar} />}
          />
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
