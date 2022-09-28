import { useEffect, useState } from 'react';

const BudgetForm = (props) => {
    const [budgetYear, setBudgetYear] = useState('2020');
    const [budget, setBudget] = useState(0);

    useEffect(() => {
        const selectedBudget = props.budgets.find(
            (budget) => budget.year === budgetYear
        );

        if (selectedBudget) setBudget(selectedBudget.budget);
    }, [budgetYear, props.budgets]);

    const yearChangeHandler = (e) => {
        setBudgetYear(e.target.value);
    };

    const budgetChangeHandler = (e) => {
        setBudget(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        props.saveBudgetDataHandler({ year: budgetYear, budget: +budget });
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className="form-container__controls">
                    <div className="form-container__control dropdown">
                        <label>Year</label>
                        <select value={budgetYear} onChange={yearChangeHandler}>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                    <div className="form-container__control">
                        <label>Budget</label>
                        <input
                            type="number"
                            min="5"
                            step="0.5"
                            value={budget}
                            onChange={budgetChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-container__actions">
                    <button
                        onClick={props.cancelBudgetFormHandler}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button type="submit">Set Budget</button>
                </div>
            </form>
        </div>
    );
};

export default BudgetForm;
