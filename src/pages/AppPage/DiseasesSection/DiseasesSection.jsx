import  { useState, useEffect } from 'react';
import diseasesData from '../../../utils/diseasesData'; 
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
        setDiseases(diseasesData);
    }, []);

    const handleChange = (event) => {
        const selectedName = event.target.value;
        setSelectedDisease(selectedName);

        const selectedDiseaseDetails = diseases.find(disease => disease.name === selectedName);
        if (selectedDiseaseDetails) {
            setDiseaseDetails({
                description: selectedDiseaseDetails.description,
                recommendation: selectedDiseaseDetails.recommendation
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
            <label htmlFor="selectDisease" className="diseases-label">Select Disease:</label>
            <select name="selectDisease" id="selectDisease" value={selectedDisease} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                {diseases.map(disease => (
                    <option key={disease.name} value={disease.name}>{disease.name}</option>
                ))}
            </select>
            <p className="disease-text">{diseaseDetails.description}</p>
            <p className="disease-text">{diseaseDetails.recommendation}</p>
        </section>
    );
};

export default DiseasesSection;

