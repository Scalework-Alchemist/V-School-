import React from 'react';

const Editform = ({ handleChange, handleSubmit, inputs }) => {
    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <input name="title" onChange={handleChange} value={inputs.title} type="text" />
            <input name="amount" onChange={handleChange} value={inputs.amount} type="text" />
            <input name="date" onChange={handleChange} value={inputs.date} type="text" />
            <button>Save</button>
        </form>
    )
};

export default Editform;