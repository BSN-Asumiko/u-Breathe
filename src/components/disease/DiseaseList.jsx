import React from "react";
import listDisease from "../../utils/dataDisease.js";
import Disease from "./Disease.jsx"



const DiseaseList = () => (
  <div>
     
    {listDisease.map((disease, index) => (
      <Disease key={index} name={disease.name} description={disease.description} recommendations={disease.recommendations} />
    ))}
  </div>
);

export default DiseaseList;