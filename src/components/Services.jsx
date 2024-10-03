/* 
    File name: Services.js
    Student's Name: Berkay Gezbeli
    StudentID: 301428408
    Date: 01/10/2024 (dd/mm/yyyy)
*/

import React from 'react';
import webAppImage from '../assets/web-app.jpg';
import mobileAppImage from '../assets/mobile-app.jpg';
import databaseImage from '../assets/database.jpg';
import electricalImage from '../assets/electrical.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Application Development (Full-Stack)',
      description: 'Developing responsive and scalable full-stack web applications using modern technologies such as React, Vue.js, Angular, Svelte, Node.js, Express.js, and Java. I specialize in building responsive and user-friendly web pages that adapt to all devices.',
      image: webAppImage,
    },
    {
      id: 2,
      title: 'Mobile App Development (Android)',
      description: 'Building native Android mobile applications using Kotlin with a focus on performance, security, and a seamless user experience.',
      image: mobileAppImage,
    },
    {
      id: 3,
      title: 'Database Management (SQL, NoSQL)',
      description: 'Expert in managing both SQL and NoSQL databases, including technologies like MongoDB and MySQL for efficient data handling.',
      image: databaseImage,
    },
    {
      id: 4,
      title: 'Electrical and Electronics Engineer',
      description: 'Providing expertise in electrical and electronics engineering with hands-on experience in system design and automation projects.',
      image: electricalImage,
    },
  ];

  return (
    <div style={containerStyle}>
      <h1>My Services</h1>
      <div style={servicesContainerStyle}>
        {services.map((service) => (
          <div key={service.id} style={serviceCardStyle}>
            <img src={service.image} alt={service.title} style={imageStyle} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const servicesContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const serviceCardStyle = {
  width: '300px',
  margin: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

export default Services;
