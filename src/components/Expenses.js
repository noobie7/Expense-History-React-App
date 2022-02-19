import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";
function Expenses(props) {
  const [year, setYear] = useState("2020");

  const onUpdateYear = (year) => {
    setYear(year);
    console.log(year);
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selected={year} onUpdateFilter={onUpdateYear} />
        <ExpenseItem data={props.data[0]} />
        <ExpenseItem data={props.data[1]} />
        <ExpenseItem data={props.data[2]} />
        <ExpenseItem data={props.data[3]} />
      </div>
    </div>
  );
}

export default Expenses;
