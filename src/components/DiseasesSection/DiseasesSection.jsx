import  { useState, useEffect } from 'react';
import listDisease from '../../utils/dataDisease';
import "./diseasesSection.css" 

const DiseasesSection = () => {
    const [diseases, setDiseases] = useState([]);
    const [selectedDisease, setSelectedDisease] = useState('');
    const [diseaseDetails, setDiseaseDetails] = useState({
        description: '',
        recommendation: ''
    });

    useEffect(() => {
        // Fetch data from the imported array
        setDiseases(listDisease);
    }, []);

    const handleChange = (event) => {
        const selectedName = event.target.value;
        setSelectedDisease(selectedName);

        const selectedDiseaseDetails = diseases.find(disease => disease.name === selectedName);
        if (selectedDiseaseDetails) {
            setDiseaseDetails({
                description: selectedDiseaseDetails.description,
                recommendation: selectedDiseaseDetails.recommendations
            });
        } else {
            setDiseaseDetails({
                description: '',
                recommendation: ''
            });
        }
    };

    return (
        <section className="diseases-section">
            <label htmlFor="selectDisease" className="diseases-label">Selecciona enfermedad:</label>
            <select name="selectDisease" id="selectDisease" value={selectedDisease} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                {diseases.map(disease => (
                    <option key={disease.name} value={disease.name}>{disease.name}</option>
                ))}
            </select>
            <p className="disease-text"><span className='disease-title'>Descripción: </span>{diseaseDetails.description}</p>
            <p className="disease-text"><span className='disease-title'>Recomendaciones: </span>{diseaseDetails.recommendation}</p>
        </section>
    );
};

export default DiseasesSection;

