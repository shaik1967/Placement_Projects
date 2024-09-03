import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./doctorProfile.css";

const initialAppointments = [
  { id: 1, name: 'Rama', request: 'General Checkup', status: 'pending' },
  { id: 2, name: 'Krishna', request: 'Dental Cleaning', status: 'pending' },
  // Add more initial appointments as needed
];

const DoctorProfile = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const navigate = useNavigate();

  const handleAccept = (id, time) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === id ? { ...appointment, status: 'accepted', time } : appointment,
      navigate("/patientAppointInfo")
    ));
  };

  const handleReject = (id) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === id ? { ...appointment, status: 'rejected' } : appointment
    ));
  };

  const appointmentsToday = appointments.filter(app => app.status === 'accepted').length;
  const appointmentsLeft = appointments.filter(app => app.status === 'pending').length;

  return (
    <div className="container" >
      <div class="card-client" onClick={() => navigate("/profile")} >
    <div class="user-picture">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
        </svg>
    </div>
    <p class="name-client"> Doctor Name
        <span>Spelecitest
        </span>

    </p>
</div>
      <h1>Appointments</h1>
      <div className="tabs">
        <div>Appointments Today: {appointmentsToday}</div>
        <div>Appointments Left: {appointmentsLeft}</div>
      </div>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <p>Name: {appointment.name}</p>
            <p>Request: {appointment.request}</p>
            <p>Status: {appointment.status}</p>
            {appointment.status === 'pending' && (
              <div className="button-wrapper">
                <button className='accept cookie-button' onClick={() => handleAccept(appointment.id, prompt('Enter meeting time'))}>Accept</button>
                <button className='reject cookie-button' Click={() => handleReject(appointment.id)}>Reject</button>
              </div>
            )}
            {appointment.status === 'accepted' && <p>Meeting Time: {appointment.time}</p>}
          </li>
        ))}
      </ul>
    {/*<button className="btn" onClick={() => navigate("/profile")}>Profile</button>*/}
    
    </div>
  );
};

export default DoctorProfile;
