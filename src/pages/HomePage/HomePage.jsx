// src/pages/HomePage/HomePage.jsx
import "./homePage.css";
import React from "react";
import Banner from "../../components/banner/Banner";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Title text="Sobre nosotras" />
      <div className="card-container">
        <Card
          imageSrc="/assets/images/us.avif"
          text="Grupo multidisciplinar compuesto por seis personas con diferentes talentos, especialidades y virtudes. Gracias a ello, formamos un gran equipo en el que la comunicación y la constancia son la clave del éxito."
          link="/AboutUs"
        />
        <Card
          imageSrc="/assets/images/data.jpeg"
          text="La Sociedad Europea de Enfermedades Respiratorias (ERS) indica que en las enfermedades respiratorias crónicas es recomendable evitar los días de exposición y los lugares más contaminados (buscando, por ejemplo, espacios verdes) y aconseja conocer los niveles de polución."
          link="https://www.vademecum.es/noticia-190930-los+expertos+en+neumolog+iacute+a+recomiendan+m+aacute+s+informaci+oacute+n+frente+la+poluci+oacute+n+y+vacunarse+para+prevenir+enfermedades_13427"
        />
      </div>
    </div>
  );
};

export default HomePage;
