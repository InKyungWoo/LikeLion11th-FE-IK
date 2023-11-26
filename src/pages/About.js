// About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer id="about">
      {/* Add your education and activity content here */}
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background-color: #9a859c;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default About;
