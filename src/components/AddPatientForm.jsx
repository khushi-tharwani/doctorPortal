// src/components/AddPatientForm.jsx

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AddPatientForm = () => {
  const { addPatient } = useAppContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [condition, setCondition] = useState('');
  const [contact, setContact] = useState(''); // New state for contact

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && condition && contact) { // Ensure all fields are filled
      addPatient({ name, age: parseInt(age), condition, contact }); // Include contact
      setName('');
      setAge('');
      setCondition('');
      setContact(''); // Reset contact
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-patient-form">
      <h3>Add New Patient</h3>
      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Contact Number" // New contact input
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
