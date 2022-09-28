import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import SetBudget from './components/SetBudget/SetBudget';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14)
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28)
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12)
    }
];

const DUMMY_BUDGETS = [
    {
        year: '2019',
        budget: 0
    },
    {
        year: '2020',
        budget: 12
    },
    {
        year: '2021',
        budget: 0
    },
    {
        year: '2022',
        budget: 0
    }
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const [budgets, setBudgets] = useState(DUMMY_BUDGETS);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    const updateBudgetHandler = (budget) => {
        setBudgets((prevBudgets) => {
            return prevBudgets.map((b) => {
                if (b.year === budget.year) {
                    return budget;
                }

                return b;
            });
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <SetBudget onUpdateBudget={updateBudgetHandler} budgets={budgets} />
            <Expenses expenses={expenses} budgets={budgets} />
        </div>
    );
}

export default App;
