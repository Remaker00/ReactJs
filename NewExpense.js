import React, { useState } from 'react';
import './NewExpense.css';

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

    const clickHandleCancel = () => {
        props.onCancel();
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                Expense Title: <input type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                Expense Amount: <input type="number" value={amount} onChange={handleAmountChange} />
                </div>
                <div>
                Expense Location: <input type="text" value={location} onChange={handleLocationChange} />
                </div>
                <button type="submit">Add</button>
            </form>
            <button onClick = {clickHandleCancel}>Cancel</button>
        </div>
    );
};

export default NewExpense;
