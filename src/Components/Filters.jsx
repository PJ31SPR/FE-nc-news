import React, { useState } from 'react';

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
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={changeSortSelectInput} value={sortSelectInput} name="sort">
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="votes">Votes</option> 
                <option value="comment_count">Comments</option>
                <option value="created_at">Date Posted</option>
            </select>
            <label htmlFor="order">Order by:</label>
            <select id="order" onChange={changeOrderBySelectInput} value={orderBySelectInput} name="order">
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <button type="submit">Filter</button>
        </form>
        </div>
    );
};

export default Filters;