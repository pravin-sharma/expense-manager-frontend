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
      <table className="table align-middle mb-4 bg-white border rounded">
        <thead className="bg-light align-middle">
          <tr>
            <th>Expense Name and Cost</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered != null
            ? filtered.map((expense) => {
                return <ExpenseItem key={expense._id} expense={expense} />;
              })
            : expenses.map((expense) => {
                return <ExpenseItem key={expense._id} expense={expense} />;
              })}
          {filtered != null ? (
            <tr>
              <td>
                Expense Total:{" "}
                {filtered.reduce((acc, curr) => acc + curr.cost, 0)}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ):(<tr>
            <td>
              Expense Total:{" "}
              {expenses.reduce((acc, curr) => acc + curr.cost, 0)}
            </td>
          </tr>)}
        </tbody>
      </table>
      {filtered?.length === 0 && (
        <h5 className="text-muted ms-3">No Match found</h5>
      )}
    </Fragment>
  );
};

export default Expenses;
