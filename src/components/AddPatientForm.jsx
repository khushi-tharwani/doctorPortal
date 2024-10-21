import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AddPatientForm = () => {
  const { addPatient } = useAppContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && condition) {
      addPatient({ name, age: parseInt(age), condition }); // Ensure age is a number
      setName('');
      setAge('');
      setCondition('');
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
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
