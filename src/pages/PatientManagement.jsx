// src/pages/PatientManagement.jsx

import React from 'react';
import { useAppContext } from '../context/AppContext';
import AddPatientForm from '../components/AddPatientForm';

const PatientManagement = () => {
  const { patients } = useAppContext();

  // Function to handle audio feedback
  const handlePlayAudio = (patient) => {
    // Use backticks for template literals
    const utterance = new SpeechSynthesisUtterance(
      `Patient Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}, Contact: ${patient.contact}`
    );
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="patient-management">
      <AddPatientForm />
      <h2>Patient Management</h2>
      {patients.length === 0 ? (
        <p>No patients available.</p>
      ) : (
        <div className="patient-list">
          {patients.map((patient) => (
            <div className="patient-card" key={patient.id}>
              <h3>{patient.name}</h3>
              <p>Age: {patient.age}</p>
              <p>Condition: {patient.condition}</p>
              <p>Contact: {patient.contact}</p>
              
              {/* Button to play audio feedback */}
              <button onClick={() => handlePlayAudio(patient)}>Play Audio Feedback</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientManagement;
