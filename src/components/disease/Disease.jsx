import "./disease.css";

const Disase = ({ name, description, recommendations }) => (
    <div className="container">
       
      <h3 className="titleDisease">{name}</h3>
      
      <p className="text"><span className="nameTitle">Descripción: </span>{description}</p>
      <p className="text"><span className="nameTitle">Recomendaciones: </span>{recommendations}</p>
    </div>
  );

  export default Disase