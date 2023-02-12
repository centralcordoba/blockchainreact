import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  const expenses=[
    {id: 'e1', title:'Car Insurance1', amount: 294.98, date: new Date(2021, 2, 10).toLocaleDateString()},
    {id: 'e2', title:'Car Insurance2', amount: 299.98, date: new Date(2021, 3, 11).toLocaleDateString()},
    {id: 'e3', title:'Car Insurance3', amount: 299.98, date: new Date(2021, 4, 12).toLocaleDateString()},
  ];

  return (
   <div>
    <h2>Let's get started!</h2>
   <Expenses items= {expenses}/>
   </div>
  );
}

export default App;
