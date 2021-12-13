import './ExpenseDate.css';

const ExpenseDate = (props)=> {
    const weekDay = props.date.toLocaleString('en-IL', { weekday: 'long' });
    const day = props.date.toLocaleString('en-IL', { day: 'numeric' });
    const month = props.date.toLocaleString('en-IL', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div>{weekDay}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate;