import React, { useState } from 'react';
import './NewExpense.css';
import AddExpense from './AddExpense';

const ConditionExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
    };

    return (
        <div className='container'>
            {isFormVisible ? (
                <div>
                    <AddExpense onAddExpense={props.onAddExpense} 
                     onCancel={toggleFormVisibility} />
                </div>
            ) : (
                <button onClick={toggleFormVisibility}>Add Expense</button>
            )}
        </div>
    );
};

export default ConditionExpense;
