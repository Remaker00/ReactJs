import React from 'react'
import NewExpense from './NewExpense';

const AddExpense = (props) => {

    const addExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            key: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const cancelHandler = () => {
      props.onCancel(); 
  };

  return (
    <div className='new-expense'>
        <NewExpense onAddExpense = {addExpenseData} onCancel={cancelHandler} />
    </div>
  )
}

export default AddExpense
