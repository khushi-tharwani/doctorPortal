// src/context/AppContext.jsx

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Initialize state
  const [patients, setPatients] = useState([]); // Start with empty array
  const [appointments, setAppointments] = useState([]); // Start with empty array
  const [doctors, setDoctors] = useState([]); // Start with empty array

  return (
    <AppContext.Provider value={{ patients, setPatients, appointments, setAppointments, doctors, setDoctors }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
