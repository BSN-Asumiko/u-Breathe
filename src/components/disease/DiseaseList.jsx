import React from "react";
import listDisease from "../../utils/dataDisease.js";
import Disease from "./Disease.jsx"
import Button from "../buttons/Buttons.jsx";




const DiseaseList = () => (
  <div>
     
    {listDisease.map((disease, index) => (
      <div key={index}>
      <Disease  name={disease.name} description={disease.description} recommendations={disease.recommendations} />
      <div className="containerButton">
        <Button text="Edit"/>
        <Button text="Delete"/>
      </div>
      </div>
   ))}
  </div>
);

export default DiseaseList;