import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="bg-blue-400 flex width-screen h-16">
      <ul className="flex">
        <li>Calculate</li> //Link to CalcForm (need to setup router first)
        <li>See graph</li> //Link to GraphResults (need to setup router first)
      </ul>
    </div>
  );
}

export default header;
