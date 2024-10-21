import React from 'react';
import { useAppContext } from '../context/AppContext';
import AddPatientForm from '../components/AddPatientForm';

const PatientManagement = () => {
  const { patients, removePatient } = useAppContext();

  return (
    <div className="patient-management">
      <AddPatientForm />
      <h2>Patient Management</h2>
      {patients.length === 0 ? (
        <p>No patients available.</p>
      ) : (
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.name}, Age: {patient.age}, Condition: {patient.condition}
              <button onClick={() => removePatient(patient.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientManagement;
