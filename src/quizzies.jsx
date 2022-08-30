import React from "react";
import "./App.css";
import lightBg from "./assets/y-so-serious-white.png";

export default function Quizzies() {
  return (
    <div
      style={{
        backgroundImage: `url(${lightBg})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {" "}
      <div className="quizzies">
        <h1>Quizzical</h1>
        <div className="subHead"> Sasta Kaun Bnega Crorepati !</div>
      </div>
    </div>
  );
}
