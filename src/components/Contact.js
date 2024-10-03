/* 
    File name: Contact.js
    Student's Name: Berkay Gezbeli
    StudentID: 301428408
    Date: 01/10/2024 (dd/mm/yyyy)
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Me</h1>

      <div style={contactPanelStyle}>
        <p><strong>Email:</strong> berkay.gezbeli@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/berkaygezbeli" target="_blank" rel="noopener noreferrer">linkedin.com/in/berkaygezbeli</a></p>
        <p><strong>Address:</strong> Toronto, ON, CANADA</p>
      </div>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
            <label style={labelStyle}>First Name:</label>
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
            required
            />
        </div>
        <div>
            <label style={labelStyle}>Last Name:</label>
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
            required
            />
        </div>
        <div>
            <label style={labelStyle}>Contact Number:</label>
            <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            style={inputStyle}
            required
            />
        </div>
        <div>
            <label style={labelStyle}>Email:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
            />
        </div>
        <div>
            <label style={labelStyle}>Message:</label>
            <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            required
            />
        </div>
        <button type="submit" style={submitButtonStyle}>Submit</button>
        </form>
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '50px',
};

const contactPanelStyle = {
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  width: '300px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
    marginTop: '20px',
    textAlign: 'left',
    display: 'inline-block',
    width: '100%',
    maxWidth: '400px',
  };
  
const inputStyle = {
 width: '100%',
 padding: '10px',
 marginTop: '8px',
 marginBottom: '20px',
 display: 'block',
 borderRadius: '5px',
 border: '1px solid #ccc',
 boxSizing: 'border-box',
};

const labelStyle = {
 display: 'block',
 fontWeight: 'bold',
 marginBottom: '5px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '8px',
  marginBottom: '20px',
  display: 'block',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const submitButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '100%',
};
  

export default Contact;
