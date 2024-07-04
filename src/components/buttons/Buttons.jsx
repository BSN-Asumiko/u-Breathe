import React from 'react'
import "./buttons.css";

const Button = ({ text, functionProp }) => (
    <>
      <button className="button" onClick={functionProp}>{text}</button>
    </>
  );

export default Button;