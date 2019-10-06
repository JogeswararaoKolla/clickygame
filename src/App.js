import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Title from "./components/Title.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";
import images from "./image.js";

const App = props => {
  const [imageref, setImageref] = useState(images);
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState({ message: "Click an image to begin!" });
  const [topscore, setTopscore] = useState(0);

  const gameController = id => {
    for (let i = 0; i < imageref.length; i++) {
      if (imageref[i].id == id) {
        if (imageref[i].clicked == false) {
          imageref[i].clicked = true;
          setCounter(counter + 1);
          setMsg({ message: "you guessed correctly!" });
          setImageref(shuffle(imageref));
          break;
        } else {
          gameInitialization();
        }
      }
    }
  };

  const gameInitialization = () => {
    setTopscore(counter);
    setCounter(0);
    setImageref(clickdefault(imageref));
    setMsg({ message: "you guessed incorrectly!" });
    console.log(images);
    console.log(counter);
  };

  const clickdefault = arr => {
    return arr.map(element => {
      element.clicked = false;
      return element;
    });
  };

  function shuffle(arr) {
    let ctr = arr.length;
    let temp;
    let index;
    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }

  return (
    <div>
      <Header message={msg.message} score={counter} topscore={topscore} />
      <Title />
      <Card cards={imageref} ClickCount={gameController} />
      <Footer />
    </div>
  );
};

export default App;
