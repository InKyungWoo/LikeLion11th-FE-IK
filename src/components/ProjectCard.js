import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, imageSrc, date, info, tech }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer>
      <Card onClick={handleCardClick} isExpanded={isExpanded}>
        <img className="img" src={imageSrc} alt={title} />
        <div className="txt">
          <h3>{title}</h3>
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
  max-width: 300px; 
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
    width: 100%;
    height: auto;
    border-radius: 15px 15px 0 0;
  }

  .txt {
    padding: 15px;
    background-color: #ebe9eb;
    font-family: 'Happiness-Sans';
    color: #8e8e8e;

    h3 {
      margin: 0;
      font-size: 15px;
      color: #5b5959;
    }

    dl {
      margin: 0;
      div {
        padding: 2px;
        dt {
          font-weight: normal;
          font-size: 10px;
          margin-top: 5px;
        }
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
