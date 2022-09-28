import './ExpensesDetail.css';

const ExpensesDetail = (props) => {
    return (
        <div className="expenses-detail">
            <div className="expenses-detail__label">{props.label}</div>
            <div>{props.value}</div>
        </div>
    );
};

export default ExpensesDetail;
