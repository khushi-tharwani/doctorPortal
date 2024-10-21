import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MedicaPro</div>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/doctor-portal">Doctor Portal</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
