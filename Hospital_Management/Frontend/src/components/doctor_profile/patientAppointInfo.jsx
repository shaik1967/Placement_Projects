import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './patientAppointInfo.css';

const medicineSuggestions = [
  { name: 'Aspirin' },
  { name: 'Amoxicillin' },
  { name: 'Ibuprofen' },
  { name: 'Acetaminophen' },
  { name: 'Lisinopril' },
  // Add more medicine suggestions as needed
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : medicineSuggestions.filter(
    med => med.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: 'Raj kumar',
    place: 'chirala',
    dateOfBirth: '1990-01-01',
    symptoms: 'Fever, cough, headache',
    bloodGroup: 'O+',
    age: '30',
    gender: 'Male',
    phNumber: '123-456-7890',
    concerns: 'Fever',
    prescription: '',
  });

  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e, { newValue }) => {
    setFormData({
      ...formData,
      prescription: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Send formData to the backend
    fetch('http://localhost:3000/api/patient-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={formData.place}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="symptoms">Symptoms:</label>
        <textarea
          id="symptoms"
          name="symptoms"
          value={formData.symptoms}
          readOnly
        ></textarea>
      </div>

      <div>
        <label htmlFor="bloodGroup">Blood Group:</label>
        <input
          type="text"
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="phNumber">Phone Number:</label>
        <input
          type="tel"
          id="phNumber"
          name="phNumber"
          value={formData.phNumber}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="concerns">Concerns:</label>
        <textarea
          id="concerns"
          name="concerns"
          value={formData.concerns}
          readOnly
        ></textarea>
      </div>

      <div>
        <label htmlFor="prescription">Prescription:</label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            id: 'prescription',
            name: 'prescription',
            value: formData.prescription,
            onChange: handleChange,
            required: true,
          }}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;
