
import React, { useState } from 'react';
import './Patient_info.css';
import FileUpload from './FileUpload'; // Adjust the path as necessary

{/*import React, { useState } from 'react';
import './Patient_info.css';
import FileUpload from './FileUpload'; // Adjust the path as necessary


const Patient_info = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    dateOfBirth: '',
    symptoms: '',
    bloodGroup:'',
    Age: '',
    gender: '',
    phNumber:'',
    concerns: '',
    firstTimeVisit: null, // Changed to null for radio buttons
    firstVisitDate: '', // Added field for first visit date
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Form Data:', formData);

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
    // You can handle form submission here, like sending the data to an API
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
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={formData.place}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="symptoms">Symptoms:</label>
        <textarea
          id="symptoms"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="concerns">Concerns:</label>
        <textarea
          id="concerns"
          name="concerns"
          value={formData.concerns}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label>First Time Visit:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="firstTimeVisit"
              value="yes"
              checked={formData.firstTimeVisit === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="firstTimeVisit"
              value="no"
              checked={formData.firstTimeVisit === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      {formData.firstTimeVisit === 'no' && (
        <div>
          <label htmlFor="firstVisitDate">First Visit Date:</label>
          <input
            type="date"
            id="firstVisitDate"
            name="firstVisitDate"
            value={formData.firstVisitDate}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div>
          <h1>React File Upload Example</h1>
          <FileUpload />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Patient_info;*/}

const Patient_info = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    dateOfBirth: '',
    symptoms: '',
    bloodGroup: '',
    age: '',
    gender: '',
    phNumber: '',
    concerns: '',
    firstTimeVisit: null, // Changed to null for radio buttons
    firstVisitDate: '', // Added field for first visit date
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Form Data:', formData);

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
    // You can handle form submission here, like sending the data to an API
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
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={formData.place}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="symptoms">Symptoms:</label>
        <textarea
          id="symptoms"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="concerns">Concerns:</label>
        <textarea
          id="concerns"
          name="concerns"
          value={formData.concerns}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label>First Time Visit:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="firstTimeVisit"
              value="yes"
              checked={formData.firstTimeVisit === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="firstTimeVisit"
              value="no"
              checked={formData.firstTimeVisit === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      {formData.firstTimeVisit === 'yes' && (
        <>
          <div>
            <label htmlFor="bloodGroup">Blood Group:</label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="phNumber">Phone Number:</label>
            <input
              type="tel"
              id="phNumber"
              name="phNumber"
              value={formData.phNumber}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}

      {formData.firstTimeVisit === 'no' && (
        <div>
          <label htmlFor="firstVisitDate">First Visit Date:</label>
          <input
            type="date"
            id="firstVisitDate"
            name="firstVisitDate"
            value={formData.firstVisitDate}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div>
          <h1>React File Upload Example</h1>
          <FileUpload />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Patient_info;

