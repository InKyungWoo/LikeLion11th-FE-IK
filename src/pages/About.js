// About.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: '🍰 This is For You',
    imageSrc: 'images/projects/tify.jpg',
    date: '2023.04 ~ 2023.05',
    info: '기념일 D-day 어드벤트 캘린더 웹',
    tech: 'JS, React, Django',
    githubLink: 'https://github.com/InKyungWoo/11th_team3_miniproject',
  },
  {
    title: '🚫 tt project',
    imageSrc: 'images/projects/tt.png',
    date: '2023.04 ~ 2023.06',
    info: '틱톡 유해컨텐츠 필터링 모델 개발',
    tech: 'Python, Sequential, VGG',
    githubLink: 'https://github.com/InKyungWoo/ttproject',
  },
  {
    title: '💳 똑카',
    imageSrc: 'images/projects/ttoka.png',
    date: '2023.07 ~ 2023.08',
    info: '시니어 대상 카드 추천 서비스 웹',
    tech: 'JS, React, Django, SQLite',
    githubLink: 'https://github.com/InKyungWoo/ttogka-web',
  },
  {
    title: '🥜 Tori',
    imageSrc: 'images/projects/tori.png',
    date: '2023.09 ~ 2023.11',
    info: '경기도 여행지 추천 웹',
    tech: 'JS, Next.js, Java',
    githubLink: 'https://github.com/GPYR-Tori',
  },
];

const About = () => {
  return (
    <AboutContainer id="about">
      <Wrapper>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectGrid>
      </Wrapper>
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
`;

const Wrapper = styled.div`
  //background-color: #755f79;
  border-radius: 15px;
  padding-top: 120px;
  display: flex;
  align-items: center;
  width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 60%; 
  margin: 20px auto;
  text-align: center;
`;

export default About;
