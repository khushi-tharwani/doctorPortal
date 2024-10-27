// src/context/AppContext.jsx

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Function to add a new patient
  const addPatient = (patient) => {
    setPatients((prevPatients) => [...prevPatients, patient]);
  };

  return (
    <AppContext.Provider
      value={{
        patients,
        addPatient,
        appointments,
        setAppointments,
        doctors,
        setDoctors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use AppContext
export const useAppContext = () => useContext(AppContext);
