import React from "react";
import Disase from "./Disase";



const DisaseList = ({ listDisease }) => (
  <div>
     
    {listDisease.map((disase, index) => (
      <Disase key={index} name={disase.name} description={disase.description} />
    ))}
  </div>
);

export default DisaseList;