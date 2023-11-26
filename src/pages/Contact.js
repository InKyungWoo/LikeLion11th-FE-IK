// Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
      <ContactContainer>
        <ImageContainer>
          <ContactImage src="./images/sea.png" alt="Contact" />
        </ImageContainer>
  
        <ContactList>
          <ContactLink href="https://github.com/InKyungWoo" className="ct">
            Github
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
    gap: 80px;
    margin-top: 130px;
  `;
  
  const ContactLink = styled.a`
    color: #a7bce1;
    text-decoration: none;
    font-size: 30px;
  
    &:hover {
      text-decoration: underline;
    }
  `;


    export default Contact;
