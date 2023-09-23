import './App.css';
import Expense from './components/ExpenseItem';

function App() {

  const expenses = [
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
  ]

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
    </div>
  );
}

export default App;
