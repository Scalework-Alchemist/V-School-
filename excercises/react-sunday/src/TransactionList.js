import React, { Component } from 'react';

import AddForm from "./AddForm";
import Transaction from "./Transaction";
import FormContainer from "./FormContainer";

import transactionData from "./transactionData.json";

export default class TransactionList extends Component {
    constructor() {
        super();
        this.state = {
            transactions: transactionData
        }
        this.addTransaction = this.addTransaction.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this);
        this.editTransaction = this.editTransaction.bind(this);
    }
    addTransaction(transaction) {
        this.setState(prevState => ({
            transactions: [transaction, ...prevState.transactions]
        }))
    }
    removeTransaction(id) {
        this.setState(prevState => ({
            transactions: prevState.transactions.filter(transaction => (
                transaction.id !== id
            ))
        }))
    }
    editTransaction(id, newTransaction) {
        this.setState(prevState => ({
            transactions: prevState.transactions.map(transaction => (
                id !== transaction.id ? transaction : newTransaction
            ))
        }))
    }
    render() {
        const transComponents = this.state.transactions.map(transaction => (
            <Transaction
                key={transaction.id}
                {...transaction}
                removeTransaction={this.removeTransaction}
                editTransaction={this.editTransaction} />
        ))
        return (
            <div>
                <FormContainer
                    submit={this.addTransaction}
                    inputs={{ id: "", title: "", amount: "", date: "" }}
                    reset
                    render={AddForm} />
                <div className="transaction-list-wrapper">
                    <div className="list-labels">
                        <p>ID</p>
                        <p>Title</p>
                        <p>Amount</p>
                        <p>Date</p>
                    </div>
                    <hr />
                    {transComponents}
                </div>
            </div>
        )
    }
}
