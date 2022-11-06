import React, { Fragment, useContext } from "react";
import ExpenseContext from "../../context/expense/expenseContext";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);
  const { expenses, filtered } = expenseContext;

  if (expenses.length === 0) {
    return <h2>Please add Expense</h2>;
  }

  return (
    <Fragment>
      <ul className="list-group ms-3">
        {filtered != null
          ? filtered.map((expense) => {
              return <ExpenseItem key={expense._id} expense={expense} />;
            })
          : expenses.map((expense) => {
              return <ExpenseItem key={expense._id} expense={expense} />;
            })}
      </ul>
      {filtered?.length === 0 && <h2>No Match Found</h2>}
    </Fragment>
  );
};

export default Expenses;
