import React from "react";
import "./styles.css";

function Detailscard(props) {
 // console.log(props);
  return (
    <div className="Pranav">
      <h3>Name:{props.contact.name}</h3>
      <p>Age:{props.contact.age}</p>
    </div>
  );
}
export default Detailscard;
