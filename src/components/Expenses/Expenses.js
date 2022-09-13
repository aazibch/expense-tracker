import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

import './Expenses.css';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const onFilterYearChange = (e) => {
        setFilterYear(e.target.value);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                value={filterYear}
                onFilterYearChange={onFilterYearChange}
            />
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            />
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            />
        </Card>
    );
};

export default Expenses;
