/* 
    File name: About.js
    Student's Name: Berkay Gezbeli
    StudentID: 301428408
    Date: 01/10/2024 (dd/mm/yyyy)
*/

import React from 'react';
import myPhoto from '../myphoto.jpg';
import resume from '../assets/Berkay-Gezbeli-Resume.pdf';

const About = () => {
  return (
    <div style={aboutContainerStyle}>
      <img src={myPhoto} alt="My portrait" style={photoStyle} />
      <h1>Berkay Gezbeli</h1>
      <p>
      I am a software developer and an electrical & electronics engineer. I have professional experience, and I am currently studying Software Engineering Technology at Centennial College. Through this education, I learn different technologies every day. My biggest passion is applying the new knowledge I acquire and creating projects. My goal is to improve myself every day and learn new things to grow. I am an open-minded person who enjoys teamwork and especially loves sharing my knowledge with others. I believe that teaching others helps a person grow even more.
      </p>
      <a href={resume} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        Download my Resume (PDF)
      </a>
    </div>
  );
};

const aboutContainerStyle = {
  textAlign: 'center',
  padding: '50px',
};

const photoStyle = {
  width: '170px',
  borderRadius: '50%',
  marginBottom: '15px',
};

const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

export default About;
