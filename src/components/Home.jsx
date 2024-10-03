/* 
    File name: Home.js
    Student's Name: Berkay Gezbeli
    StudentID: 301428408
    Date: 01/10/2024 (dd/mm/yyyy)
*/

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to My Personal Portfolio</h1>
      <p>Explore my projects, learn more about me, and see how I can help you with my services!</p>

      <h2>Mission</h2>
      <small>
      My mission is to use my knowledge and skills in software development to continuously improve and create efficient and useful products. I strive to share every project I create and develop with those interested in software and eager to learn, while always remaining open to growth with the belief that I can learn something from everyone.
      </small>

      <div style={{ marginTop: '20px' }}>
        <Link to="/about" style={buttonStyle}>Learn More About Me</Link>
        <Link to="/projects" style={buttonStyle}>View My Projects</Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
};

export default Home;
