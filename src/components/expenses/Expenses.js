import React, { Fragment, useContext } from "react";
import { useEffect } from "react";
import ExpenseContext from "../../context/expense/expenseContext";
import Spinner from "../layout/Spinner";
import AuthContext from "../../context/auth/authContext";
import ExpenseItem from "./ExpenseItem";
import axios from "axios";
const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);
  const { expenses, filtered, getExpenses, loading } = expenseContext;

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      getExpenses();
    }
  }, [isAuthenticated]);

  if (expenses.length === 0 && !loading) {
    return <h5 className="text-muted ms-3">No Expenses to show</h5>;
  }

  // TODO: added spinner later
  return (
    <Fragment>
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
        {filtered?.length === 0 && (
          <h5 className="text-muted ms-3">No Match found</h5>
        )}
      </Fragment>
    </Fragment>
  );
};

export default Expenses;
