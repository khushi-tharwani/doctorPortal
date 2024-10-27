// src/pages/Dashboard.jsx

import React from 'react';
import { useAppContext } from '../context/AppContext';


const Dashboard = () => {
  const { patients, appointments, doctors } = useAppContext();

  const patientsCount = patients ? patients.length : 0;
  const appointmentsCount = appointments ? appointments.length : 0;
  const doctorsCount = doctors ? doctors.length : 0;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat">
          <h3>Total Patients</h3>
          <p>{patientsCount}</p>
        </div>
        <div className="stat">
          <h3>Total Appointments</h3>
          <p>{appointmentsCount}</p>
        </div>
        <div className="stat">
          <h3>Total Doctors</h3>
          <p>{doctorsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
