import React, { useState } from 'react';
import './App.css';
import Expense from './components/ExpenseItem';
import AddExpense from './components/NewExpaense/AddExpense';

function App() {

  const [expenses, setExpenses] = useState([
    {
      title: 'Food',
      amount: '10',
      location: 'Patna'
    },
    {
      title: 'Petrol',
      amount: '100',
      location: 'Rajabazzar'
    },
    {
      title: 'Movies',
      amount: '200',
      location: 'Gandhimaidaan'
    }
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  }

  return (
    <div className="App">
      <h1>Expense Items</h1>
      {expenses.map((expense, index) => (
        <Expense
          key={index}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      ))}

      <AddExpense onAddExpense = {addExpenseHandler}/>
    </div>
  );
}

export default App;
