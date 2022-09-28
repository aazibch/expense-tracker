import { useState } from 'react';
import BudgetForm from './BudgetForm/BudgetForm';
import FormContainer from '../UI/FormContainer/FormContainer';

const SetBudget = (props) => {
    const [showBudgetForm, setShowBudgetForm] = useState(false);

    const showBudgetFormHandler = () => {
        setShowBudgetForm(true);
    };

    const cancelBudgetFormHandler = () => {
        setShowBudgetForm(false);
    };

    const saveBudgetDataHandler = (budget) => {
        props.onUpdateBudget(budget);
        setShowBudgetForm(false);
    };

    return (
        <FormContainer>
            {showBudgetForm ? (
                <BudgetForm
                    saveBudgetDataHandler={saveBudgetDataHandler}
                    budgets={props.budgets}
                    cancelBudgetFormHandler={cancelBudgetFormHandler}
                />
            ) : (
                <button onClick={showBudgetFormHandler}>
                    Set Budget For Year
                </button>
            )}
        </FormContainer>
    );
};

export default SetBudget;
