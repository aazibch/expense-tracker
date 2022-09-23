import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const onFilterYearChange = (e) => {
        setFilterYear(e.target.value);
    };

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear() === +filterYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter
                value={filterYear}
                onFilterYearChange={onFilterYearChange}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
