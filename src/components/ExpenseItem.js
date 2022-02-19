import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div>
        <h2 className="expense-item__description">{props.data.title}</h2>
        <div className="expense-item__price"> ${props.data.amount} </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
