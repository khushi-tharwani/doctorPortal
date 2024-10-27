import React, { useRef } from 'react';

const PatientCard = ({ patient }) => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    // Use backticks for template literals
    const utterance = new SpeechSynthesisUtterance(`Patient Name: ${patient.name}. Age: ${patient.age}. Condition: ${patient.condition}. Contact: ${patient.contact}.`);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <tr className="patient-card">
      <td>{patient.name}</td>
      <td>{patient.age}</td>
      <td>{patient.condition}</td>
      <td>{patient.contact}</td>
      <td>
        <button onClick={handlePlayAudio}>Play Audio Feedback</button>
      </td>
    </tr>
  );
};

export default PatientCard;
