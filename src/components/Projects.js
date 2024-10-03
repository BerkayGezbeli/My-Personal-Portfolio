/* 
    File name: Project.js
    Student's Name: Berkay Gezbeli
    StudentID: 301428408
    Date: 01/10/2024 (dd/mm/yyyy)
*/

import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Meal Masters-Food Order Management System',
      image: project1,
      description: 'I primarily worked on the front-end development of a food order management system using Angular, where I utilized Bootstrap as the main visual library to create a responsive and visually appealing user interface. My focus was on developing an intuitive design to enhance customer interactions and streamline order processing. Additionally, I was responsible for the database design, including the creation of tables and writing scripts to manage the data. Alongside Angular and Bootstrap, we also utilized Java for back-end services and SQL for managing the database, ensuring smooth integration and efficient data handling.'
    },
    {
      id: 2,
      title: 'Weather Forecast',
      image: project2,
      description: 'This project was developed with Vue.js and Vuetify for the front end, while the back-end services were built using Java. API connections were utilized to fetch real-time weather information based on the specified location. The application provides users with accurate and updated weather forecasts.'
    },
    {
      id: 3,
      title: 'Chatbot',
      image: project3,
      description: 'I worked as a software developer for an extended period on Etiya’s chatbot product, which was built using Vue.js, Next.js, and Svelte for various front-end components. The chatbot enables seamless communication between users and systems, providing real-time responses and improving customer interactions. My role involved integrating natural language processing (NLP) features to enhance the chatbot’s ability to understand and respond to user inquiries efficiently.'
    },
  ];

  return (
    <div style={containerStyle}>
      <h1>My Projects</h1>
      <div style={projectsContainerStyle}>
        {projectData.map((project) => (
          <div key={project.id} style={projectStyle}>
            <img src={project.image} alt={project.title} style={imageStyle} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
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

const projectsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const projectStyle = {
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

export default Projects;
