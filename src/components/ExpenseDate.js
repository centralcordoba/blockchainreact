import './ExpenseDate.css';


function ExpenseDate(props) {
    const month = '12';
    const day = '11';
    const year = '2023';

    return (
        <div className="expense-date">
            <div className= "expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
            
        </div>
    );
}

export default ExpenseDate;