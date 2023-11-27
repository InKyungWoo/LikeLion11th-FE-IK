import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, imageSrc, date, info, tech, githubLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer>
      <Card onClick={handleCardClick} isExpanded={isExpanded}>
        <img className="img" src={imageSrc} alt={title} />
        <div className="txt">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <h3 className="project-title">{title}</h3>
          </a>
          {isExpanded && (
            <dl>
              <div>
                <dt>기간: {date}</dt>
              </div>
              <div>
                <dt>설명: {info}</dt>
              </div>
              <div>
                <dt>기술 스택: {tech}</dt>
              </div>
            </dl>
          )}
        </div>
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const Card = styled.article`
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  border-radius: 15px;
  border: 1px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }

  .img {
    width: 95%;
    //height: auto;
    border-radius: 15px 15px 0 0;
    margin: 10px;
  }

  .txt {
    padding: 15px;
    background-color: #edeced;
    font-family: 'Happiness-Sans';
    color: #605267;

    a {
      text-decoration: none; /* 밑줄 지우기 */
      color: #6c5f5f;
      cursor: pointer;
    }
  }

  a:hover {
  text-decoration: underline; /* 호버 시에 밑줄 */
}

  h3 {
    margin: 0;
    font-size: 20px;
    color: #5b5959;
  }

  dl {
    margin: 0;
    div {
      padding: 2px;
      dt {
        font-weight: normal;
        font-size: 15px;
        margin-top: 10px;
      }
    }
  }

  ${({ isExpanded }) =>
    isExpanded &&
    `
    transform: scale(1.05);
  `}
`;

export default ProjectCard;