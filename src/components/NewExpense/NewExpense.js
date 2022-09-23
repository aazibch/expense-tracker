import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setShowExpenseForm(false);
    };

    const showExpenseFormHandler = () => {
        setShowExpenseForm(true);
    };

    const cancelExpenseFormHandler = () => {
        setShowExpenseForm(false);
    };

    return (
        <div className="new-expense">
            {showExpenseForm ? (
                <ExpenseForm
                    cancelExpenseFormHandler={cancelExpenseFormHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            ) : (
                <button onClick={showExpenseFormHandler}>
                    Add New Expense
                </button>
            )}
        </div>
    );
};

export default NewExpense;
