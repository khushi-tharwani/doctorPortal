// doctor portal // src/pages/DoctorPortal.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';
import PatientCard from '../components/PatientCard';

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
        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Condition</th>
              <th>Contact</th>
              <th>Audio Feedback</th>
            </tr>
          </thead>
          <tbody>
            {patients.length === 0 ? (
              <tr>
                <td colSpan="5">No patients available.</td>
              </tr>
            ) : (
              patients.map((patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPortal;