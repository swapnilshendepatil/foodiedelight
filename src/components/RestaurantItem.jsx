import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const Description = styled.p`
  margin: 5px 0;
  font-size: 1em;
  color: #555;
`;

const Location = styled.p`
  margin: 5px 0;
  font-size: 1em;
  color: #888;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 1em;
  color: white;
  background-color: #ff4b5c;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff2e3d;
  }
`;

const RestaurantItem = ({ id, name, description, location, onDelete }) => {
    return (
        <ItemContainer>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Location>{location}</Location>
            <Button onClick={() => onDelete(id)}>Delete</Button>
        </ItemContainer>
    );
};

export default RestaurantItem;
