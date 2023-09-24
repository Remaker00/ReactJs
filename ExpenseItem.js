import React from 'react'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const clickHandler = () => {
        const expenseItem = document.querySelector('.expense-item'); 
        if (expenseItem) {
            expenseItem.remove();
        }
    }

    return (
        <div className='expense-item'>
            <div>{props.location}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rs{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Delete</button>
        </div>
    )
}



export default ExpenseItem
