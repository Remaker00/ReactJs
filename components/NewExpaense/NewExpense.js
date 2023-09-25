import React, { useState } from 'react';

const NewExpense = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [location, setLocation] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount, 
            location: location,
        };

        props.onAddExpense(expenseData);

        setTitle('');
        setAmount('');
        setLocation('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Expense Title: <input type="text" value={title} onChange={handleTitleChange} />
                Expense Amount: <input type="number" value={amount} onChange={handleAmountChange} />
                Expense Location: <input type="text" value={location} onChange={handleLocationChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default NewExpense;
