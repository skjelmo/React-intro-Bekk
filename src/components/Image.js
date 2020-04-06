import React from "react";

export default function Image(props) {
  return <img className="image" src={props.src} alt={props.alt} />;
}
