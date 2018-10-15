import React from 'react';

import EditForm from "./EditForm";
import FormContainer from "./FormContainer";

function Transaction({ id, title, amount, date, removeTransaction, editTransaction }) {
    return (
        <div className="transaction-wrapper">
            <p>{id}</p>
            <FormContainer
                inputs={{ id, title, amount, date }}
                submit={inputs => {
                    editTransaction(id, inputs);
                    alert("Changes have been saved!")
                }}
                render={EditForm} />
            <button onClick={() => removeTransaction(id)}>X</button>
        </div>
    )
}

export default Transaction
