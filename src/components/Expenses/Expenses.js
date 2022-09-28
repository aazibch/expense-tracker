import { useState } from 'react';
import Card from '../UI/Card/Card';
import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesBudget from './ExpensesBudget/ExpensesBudget';

import './Expenses.css';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const onFilterYearChange = (e) => {
        setFilterYear(e.target.value);
    };

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear() === +filterYear
    );

    const budgetForFilterYear = props.budgets.find(
        (budget) => budget.year === filterYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter
                value={filterYear}
                onFilterYearChange={onFilterYearChange}
            />
            <ExpensesBudget
                filterYear={filterYear}
                filteredExpenses={filteredExpenses}
                budget={budgetForFilterYear.budget}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
