import './ExpensesBudget.css';

const ExpensesBudget = (props) => {
    let totalExpenses = 0;

    for (const expense of props.filteredExpenses) {
        totalExpenses += expense.amount;
    }

    let message = '';

    if (totalExpenses > props.budget) message = '(Exceeding budget.)';

    return (
        <div className="expenses-budget">
            <span className="expenses-budget__label">Budget</span>
            <span>
                ${totalExpenses} / ${props.budget} {message}
            </span>
        </div>
    );
};

export default ExpensesBudget;
