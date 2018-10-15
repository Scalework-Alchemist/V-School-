import React from 'react';

const AddForm = ({ handleSubmit, handleChange, inputs }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Id: </label>
            <input name="id" onChange={handleChange} value={inputs.id} type="text" />
            <label htmlFor="">Title: </label>
            <input name="title" onChange={handleChange} value={inputs.title} type="text" />
            <label htmlFor="">Amount: </label>
            <input name="amount" onChange={handleChange} value={inputs.amount} type="text" />
            <label htmlFor="">Date: </label>
            <input name="date" onChange={handleChange} value={inputs.date} type="text" />
            <button>+</button>
            <hr />
        </form>
    )
};

export default AddForm;