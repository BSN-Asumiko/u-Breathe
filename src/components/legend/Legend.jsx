import "./legend.css";


const Legend = () => {
    
  return (
    <div className="containerLegend">
      <div className="legend legend1">
        <h4>Nivel</h4>
        <p>Bueno</p>
        <h4>Rango</h4>
        <p>0-50</p>
        <h4>Daño a la salud</h4>
        <p> La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo.</p>
        <h4>Recomendaciones</h4>
        <p>Ninguna</p>
      </div>

      <div className="legend legend2">
        <h4>Nivel</h4>
        <p>Moderado</p>
        <h4>Rango</h4>
        <p>51-150</p>
        <h4>Daño a la salud</h4>
        <p> la calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber una preocupación moderada para la salud de un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire..</p>
        <h4>Recomendaciones</h4>
        <p>Los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben limitar el esfuerzo prolongado al aire libre.</p>
      </div>

      <div className="legend legend3">
        <h4>Nivel</h4>
        <p>Insano</p>
        <h4>Rango</h4>
        <p>151-300</p>
        <h4>Daño a la salud</h4>
        <p> Advertencias sanitarias de condiciones de emergencia. toda la población tiene más probabilidades de verse afectada.</p>
        <h4>Recomendaciones</h4>
        <p>los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben evitar todo esfuerzo al aire libre; todos los demás, especialmente los niños, deben limitar el esfuerzo al aire libre.</p>
      </div>
</div>
  )
};
  
export default Legend;