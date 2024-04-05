import React, { useState } from 'react';
import { styled } from '@mui/system'; // Import styled from MUI

const StyledFiltersContainer = styled('div')({
  marginBottom: '1rem', // Add margin bottom for spacing
});

const StyledForm = styled('form')({
  display: 'flex', // Use flexbox layout
  alignItems: 'center', // Center align items
});

const StyledLabel = styled('label')({
  marginRight: '0.5rem', // Add margin right for spacing
  color: '#6a287e', // Plum color
  fontFamily: 'Consolas, monospace',
});

const StyledSelect = styled('select')({
  marginRight: '0.5rem', // Add margin right for spacing
  padding: '0.5rem', // Add padding
  borderRadius: '4px', // Add border radius
  fontFamily: 'Consolas, monospace'
});

const StyledButton = styled('button')({
  backgroundColor: '#6a287e', // Plum color
  color: '#fff', // White text color
  border: 'none', // Remove border
  padding: '0.5rem 1rem', // Add padding
  borderRadius: '4px', // Add border radius
  cursor: 'pointer', // Add pointer cursor
  fontFamily: 'Consolas, monospace', // Use Consolas font family
  transition: 'background-color 0.3s', // Smooth background color transition
  "&:hover": {
    backgroundColor: "#ffd700", // Yellow color on hover
  },
});

const Filters = ({ setFilter }) => {
    const [orderBySelectInput, setOrderBySelectInput] = useState("desc");
    const [sortSelectInput, setSortSelectInput] = useState("created_at");

    const handleSubmit = (event) => {
        event.preventDefault();
        setFilter({
            order_by: orderBySelectInput,
            sort_by: sortSelectInput
        });
    };

    const changeSortSelectInput = (event) => {
        setSortSelectInput(event.target.value);
    };

    const changeOrderBySelectInput = (event) => {
        setOrderBySelectInput(event.target.value);
    };

    return (
        <StyledFiltersContainer>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel htmlFor="sort">Sort by:</StyledLabel>
                <StyledSelect id="sort" onChange={changeSortSelectInput} value={sortSelectInput} name="sort">
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="votes">Votes</option> 
                    <option value="comment_count">Comments</option>
                    <option value="created_at">Date Posted</option>
                </StyledSelect>
                <StyledLabel htmlFor="order">Order by:</StyledLabel>
                <StyledSelect id="order" onChange={changeOrderBySelectInput} value={orderBySelectInput} name="order">
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </StyledSelect>
                <StyledButton type="submit">Filter</StyledButton>
            </StyledForm>
        </StyledFiltersContainer>
    );
};

export default Filters;