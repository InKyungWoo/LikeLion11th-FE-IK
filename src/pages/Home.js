import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import About from './About';
import Favorites from './Favorites';
import Contact from './Contact';

const Home = () => {
    const navigate = useNavigate();
    const listRef = useRef();

    const handleNavigate = (path) => {
        navigate(path);
        // 클릭 시 스크롤을 페이지 맨 위로 이동시키기
        window.scrollTo(0, 0);
    };

    const handleScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            console.log(`Scrolling to element with ID: ${elementId}`);
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID ${elementId} not found`);
        }
    };
    

    return (
    <Container>
        <Header>
        <Menu>
            <MenuList>
                <StyledLink to="/" onClick={() => handleNavigate('/')}>
                <MenuItem>Home</MenuItem>
                </StyledLink>
                <MenuItem onClick={() => handleScrollTo('about')}>About</MenuItem>
                <MenuItem onClick={() => handleScrollTo('favorites')}>What I love</MenuItem>
                <MenuItem onClick={() => handleScrollTo('contact')}>Contact</MenuItem>
            </MenuList>
        </Menu>
        </Header>

        <ContentContainer ref={listRef}>
        <FirstContent>
            {/* 1. Home */}
            <Profile>
            <ProfileImage src="./images/me.jpeg" width="400px" height="400px" alt="me" />
            <p>
                <strong>Hello, I'm Inkyung :)</strong>
                <br />
                Scroll down if you want to get more info 'bout me!
            </p>
            </Profile>
        </FirstContent>

        <About />
        <Favorites />
        <Contact />
        
    </ContentContainer>
    </Container>
    );
};

export default Home;

const Container = styled.div`
  overflow: auto;
  font-family: 'Roboto Slab', serif;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const Header = styled.header`
  display: inline;
`;

const Menu = styled.nav`
  font-size: 25px;
  font-style: italic;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  scroll-behavior: smooth;
`;

const MenuList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* 보라색 밑줄 제거 */
  color: white;

  &:hover {
    text-decoration: none; /* Hover 시 밑줄 제거 */
  }
`;

const MenuItem = styled.li`
  margin: 2rem 0;
  list-style-type: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstContent = styled.div`
  background-color: #9d988e;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
    font-family: 'Pretendard-Thin';
    color: #ffffff;
    text-align: center;
    font-style: italic;
    font-weight: lighter;
    margin-top: 60px;
    font-size: 20px;
`;

const ProfileImage = styled.img`
    border-radius: 30%;
    display: inline-block;
    padding: 0.5rem;
    margin-top: 30px;
    margin-bottom: 3rem;
    border: 1px solid gray;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgb(255, 255, 255, 0.5);
`;