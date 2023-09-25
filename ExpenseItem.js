import React, { useState } from 'react'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
        const expenseItem = document.querySelector('.expense-item'); 
        if (expenseItem) {
            expenseItem.remove();
        }
    }

    const clickUpdate = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <div className='expense-item'>
            <div>{props.location}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Delete</button>
            <button onClick={clickUpdate}>update</button>
        </div>
    )
}



export default ExpenseItem
