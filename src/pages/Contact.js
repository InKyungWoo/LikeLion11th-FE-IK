// Contact.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Contact = () => {

    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        // 맨 아래에서 100px 위로 올라갈 때 보이도록 설정
        setIsScrolledDown(scrollY > documentHeight - windowHeight - 100);
      };
  
      // 이벤트 리스너 등록
      window.addEventListener('scroll', handleScroll);
  
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
      <ContactContainer id="contact">
        <ImageContainer>
          <ContactImage src="./images/sea.png" alt="Contact" />
        </ImageContainer>
  
        <ContactList>
          <ContactLink href="https://github.com/InKyungWoo" className="ct">
            Github
          </ContactLink>
          <ContactLink href="https://inkyungwoo.notion.site/Inkyung-s-Blog-e5010485d0164849a105aec5eb80a5c4?pvs=4" className="ct">
            Notion
          </ContactLink>
          <ContactLink href="https://velog.io/@chacha_w" className="ct">
            Velog
          </ContactLink>
          <ContactLink href="https://www.instagram.com/inkyung._.chacha/" className="ct">
            Instagram
          </ContactLink>
          <ContactLink href="https://www.idus.com/w/artist/ce83c71d-f182-4ec9-be74-dd23ae360a73/product" className="ct">
            IDUS
          </ContactLink>
        </ContactList>
        <Footer isVisible={isScrolledDown}>
            <p>Copyright ⓒ In Kyung Woo</p>
        </Footer>
      </ContactContainer>
    );
  };
  
  const ContactContainer = styled.div`
    background-color: #395e72;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    //align-items: flex-end;
  `;
  
  const ImageContainer = styled.div`
    flex: 0 0 auto;
    margin-right: 20px;
    margin-bottom: 0;
  `;
  
  const ContactImage = styled.img`
    width: 80%;
    height: 100%;
  `;
  
  const ContactList = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10rem;
    margin-top: 130px;
  `;
  
  const ContactLink = styled.a`
    color: #a7bce1;
    text-decoration: none;
    font-size: 50px;
  
    &:hover {
      text-decoration: underline;
    }
  `;

const Footer = styled.p`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 7px;
  background-color: white;
  color: #5d5656;
  font-size: 18px;
  text-align: center;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

    export default Contact;
