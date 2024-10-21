import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AppointmentScheduling = () => {
  const { appointments, setAppointments } = useAppContext();
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    patientName: '',
    doctorName: '',
  });

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments((prev) => [...prev, { id: prev.length + 1, ...newAppointment }]);
    setNewAppointment({ date: '', patientName: '', doctorName: '' });
  };

  return (
    <div className="appointment-scheduling">
      <h2>Appointment Scheduling</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={newAppointment.patientName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={newAppointment.doctorName}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Appointment</button>
      </form>

      <div className="appointment-list">
        <h3>Scheduled Appointments</h3>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.date} - {appointment.patientName} with Dr. {appointment.doctorName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentScheduling;
