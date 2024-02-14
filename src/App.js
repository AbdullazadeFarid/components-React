import React from "react";
import Text from "./components/text/text";
import "./App.css";
import Img from "./components/img/img";
import Button from "./components/button/button";
import Icons from "./components/icons/icons";

function App() {
  return (
    <div className="App">
      <div className="text">
        <div className="cont">
          <Text />
          <Button />
        </div>
      <div>
        <Icons />
      </div>
      </div>
      <div className="img">
        <Img />
      </div>
    </div>
  );
}

export default App;
