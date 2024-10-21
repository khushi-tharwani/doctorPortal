import React from 'react';

const PatientCard = ({ patient }) => {
  return (
    <div className="patient-card">
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  );
};

export default PatientCard;
