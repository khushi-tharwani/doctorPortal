import React from 'react';
import { useAppContext } from '../context/AppContext';

const DoctorPortal = () => {
  const { doctors, appointments, patients } = useAppContext();

  return (
    <div className="doctor-portal">
      <h2>Doctor Portal</h2>
      <div className="doctor-list">
        <h3>Doctors</h3>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              Dr. {doctor.name} ({doctor.specialization})
            </li>
          ))}
        </ul>
      </div>

      <div className="appointments-list">
        <h3>Upcoming Appointments</h3>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.date} - {appointment.patientName} with Dr. {appointment.doctorName}
            </li>
          ))}
        </ul>
      </div>

      <div className="patients-list">
        <h3>Patients Overview</h3>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.name}, Age: {patient.age}, Condition: {patient.condition}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorPortal;
