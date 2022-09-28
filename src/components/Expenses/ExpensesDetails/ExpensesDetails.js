import ExpensesDetail from './ExpensesDetail/ExpensesDetail';
import FilterByYearControl from './FilterByYearControl/FilterByYearControl';

const ExpensesDetails = (props) => {
    let totalExpenses = 0;

    for (const expense of props.expenses) {
        totalExpenses += expense.amount;
    }

    const remainingAmount =
        Math.round((props.budget - totalExpenses + Number.EPSILON) * 100) / 100;

    return (
        <>
            <ExpensesDetail
                label="Filter by Year"
                value={
                    <FilterByYearControl
                        value={props.filterYear}
                        onChange={props.onFilterYearChange}
                    />
                }
            />
            <ExpensesDetail label="Budget" value={'$' + props.budget} />
            <ExpensesDetail label="Spent" value={'$' + totalExpenses} />
            <ExpensesDetail label="Remaining" value={'$' + remainingAmount} />
        </>
    );
};

export default ExpensesDetails;
