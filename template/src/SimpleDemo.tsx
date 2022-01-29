import React, { useState } from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";
import { sketch } from "./Sketch";
import './App.css';

export function SimpleDemo() {

  const [counter, setCounter] = useState(0);

  return (
    <div>

      <h1>React with p5.js sketch</h1>

      <button className="big" onClick={() => { setCounter(p => p + 1) }}>{counter}</button>

      <ReactP5Wrapper counter={counter} sketch={sketch} />

      <br />

      Made with <a href="https://www.npmjs.com/package/react-p5-wrapper">react-p5-wrapper</a>.

    </div>
  );
}


export default SimpleDemo;

