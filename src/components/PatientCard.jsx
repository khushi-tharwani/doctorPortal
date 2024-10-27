// src/components/PatientList.jsx

import React from 'react';
import { useAppContext } from '../context/AppContext';
import PatientCard from './PatientCard';

const PatientList = () => {
  const { patients } = useAppContext();

  return (
    <div className="patient-list">
      {patients.map((patient, index) => (
        <PatientCard key={index} patient={patient} />
      ))}
    </div>
  );
};

export default PatientList;
