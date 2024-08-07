import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantItem from './RestaurantItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #666;
`;

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('/api/restaurants');
                console.log(response.data); // Inspect the response data
                setRestaurants(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching restaurants', error);
                setRestaurants([]);
            }
        };
        fetchRestaurants();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/restaurants/${id}`);
            setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
        } catch (error) {
            console.error('Error deleting restaurant', error);
        }
    };

    return (
        <ListContainer>
            {restaurants.length === 0 ? (
                <Message>No restaurants available.</Message>
            ) : (
                restaurants.map((restaurant) => (
                    <RestaurantItem key={restaurant.id} {...restaurant} onDelete={handleDelete} />
                ))
            )}
        </ListContainer>
    );
};

export default RestaurantList;
