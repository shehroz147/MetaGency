import React from "react";

export default function SeeProgram(props) {
  return (
    <div>
      <div className="seeprogram container">
        <div className="seeblack">
          <h1>{props.programs.name}</h1>
        </div>
        <h3>{props.programs.name}</h3>
        <p>{props.programs.desc}</p>
      </div>
      <div className="module">
            <h2>Module 1 - Stock Market</h2>
            <h3>Module 2 - Cryptomonale</h3>
            <h3>Module 3 - NFT</h3>
      </div>
    </div>
  );
}
