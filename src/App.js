import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Title from "./components/Title.js";
import Card from "./components/Card.js";
import images from "./image.js";

function App() {
  const [imageref] = useState(images);
  const [counter, setCounter] = useState(0);

  const src = imageref.map(element => (
    <Card ClickCount={() => setCounter(counter + 1)} src={element.img} />
  ));

  return (
    <div className="App">
      <Header message="correctly" score={counter} topscore={counter} />
      <Title />
      <div style={{ display: "flex", width: "100vh" }}>{src}</div>
    </div>
  );
}

export default App;
