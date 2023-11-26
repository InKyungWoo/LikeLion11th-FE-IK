// Favorites.js
import React from 'react';
import styled from 'styled-components';

const Favorites = () => {
  return (
    <FavoritesContainer id="favorites">
      {/* Add your favorites content here */}
    </FavoritesContainer>
  );
};

const FavoritesContainer = styled.div`
  background-color: #667c75;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Favorites;
