// Favorites.js

import React from 'react';
import styled from 'styled-components';

const Favorites = () => {
  return (
    <FavoritesContainer>
      <Title>Things that make my day 💫</Title>
      <FavoritesList>
        <ListItem>
          <ItemImage src="./images/favorites/wine.jpg" alt="Wine" />
          <ItemText>Wine 🍷</ItemText>
        </ListItem>

        <ListItem>
          <ItemImage src="./images/favorites/coffee.JPG" alt="Coffee" />
          <ItemText>Coffee ☕</ItemText>
        </ListItem>

        <ListItem>
          <ItemImageLink href="https://www.instagram.com/springbommy/" target="_blank">
            <ItemImage src="./images/favorites/archive.jpeg" alt="Record" />
          </ItemImageLink>
          <ItemText>Record 📓</ItemText>
        </ListItem>

        <ListItem>
          <ItemImage src="./images/favorites/drawing.jpg" alt="Drawing" />
          <ItemText>Drawing 🖍</ItemText>
        </ListItem>
      </FavoritesList>
    </FavoritesContainer>
  );
};

const FavoritesContainer = styled.div`
  text-align: center;
  font-family: 'Pretendard-Thin';
  background-color: #667c75;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100vw; 
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;  // 추가
`;

const Title = styled.h1`
  font-family: 'Roboto Slab', serif;
  color: rgb(35, 49, 35);
  margin-top: 100px;
  text-align: center;
  font-size: 15px;
  padding-top: 120px;
  font-weight: 700;
`;

const FavoritesList = styled.div`
  display: inline-flex;
  margin-top: 40px;
`;

const ListItem = styled.div`
  text-align: center;
  font-family: 'Pretendard-Thin';
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  font-style: italic;
  // margin-bottom: 50px;
`;

const ItemImage = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  margin: 2vh 5vh;
  margin-top: 50px;
`;

const ItemImageLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const ItemText = styled.p`
  margin-top: 5px;
  font-size:13px;
`;

export default Favorites;
