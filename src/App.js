import "./styles.css";
import React from "react";
import Detailscard from "./details"

export default function App() {
  return (
    <div className="Pranav">
      <Detailscard contact={{name:"Pranav Kumar", age:"21"}} />
      <Detailscard contact={{name:"Omkar Nath",age:"15"}} />
      <Detailscard contact={{name:"Venus Kumar",age:"25"}} />
    </div>
  );
}
