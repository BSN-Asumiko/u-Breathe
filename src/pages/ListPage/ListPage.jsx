import React from 'react'
import DisaseList from "../../components/disease/DiseaseList";
import Title from "../../components/title/Title";



const ListPage = () => {
  return (
    <div>
    <Title text="Lista de enfermedades"/>
    <DisaseList/>
    
    </div>
  )
}

export default ListPage