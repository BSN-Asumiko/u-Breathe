import ProfilesList from "../../components/profileCard/ProfilesList";
import Title from "../../components/title/Title";
import "./aboutPage.css"

const AboutPage = () => {
    return (
    <div className="page-wrapper">
        <Title text="Sobre nosotros"/>
        <h4 className="text-title">Nuestro proyecto</h4>
        <p className="project-description">Este proyecto nació en 1,5 días en el marco de un Hackathon entre las diferentes promociones de BootCamps, organizado por Factoría F5. El objetivo era construir la aplicación, consumiendo una de las APIs proporcionadas, y elegimos la de calidad del aire. Nuestra aplicación sirve para ayudar a las personas que tienen algunas enfermedades respiratorias a obtener información sobre la calidad del aire de la ciudad a la que quieren viajar, así como recomendaciones según la enfermedad que tienen. Actualmente, están disponibles 4 ciudades con la posibilidad de ampliar la geografía gracias a la escalabilidad del proyecto mediante el uso de componentes reutilizables.
        </p>
        <h4 className="text-title">Nuestro equipo</h4>
        <ProfilesList />
    </div>
    )
}

export default AboutPage