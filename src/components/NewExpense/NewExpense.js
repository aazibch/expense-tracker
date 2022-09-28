import { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import FormContainer from '../UI/FormContainer/FormContainer';

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
        <FormContainer>
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
        </FormContainer>
    );
};

export default NewExpense;
