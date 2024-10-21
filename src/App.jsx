import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PatientManagement from './pages/PatientManagement';
import AppointmentScheduling from './pages/AppointmentScheduling';
import DoctorPortal from './pages/DoctorPortal';
import { AppProvider } from './context/AppContext';
import './styles/styles.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientManagement />} />
          <Route path="/appointments" element={<AppointmentScheduling />} />
          <Route path="/doctor-portal" element={<DoctorPortal />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
