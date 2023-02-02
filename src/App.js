import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses=[
    {id: 'e1', title:'Car Insurance1', amount: 294.98, date: new Date(2021, 2, 10).toLocaleDateString()},
    {id: 'e2', title:'Car Insurance2', amount: 299.98, date: new Date(2021, 3, 11).toLocaleDateString()},
    {id: 'e3', title:'Car Insurance3', amount: 299.98, date: new Date(2021, 4, 12).toLocaleDateString()},
  ];

  return (
   <div>
    <h2>Let's get started!</h2>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
   </div>
  );
}

export default App;
