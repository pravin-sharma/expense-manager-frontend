import React, { useContext, useEffect, useRef } from "react";
import ExpenseContext from "../../context/expense/expenseContext";

function ExpenseSearch() {
  const expenseContext = useContext(ExpenseContext);
  const { filterExpense, clearFilter, filtered } = expenseContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered == null) {
      text.current.value = "";
    }
  }, [filtered]);

  const onChange = () => {
    if (text.current.value) {
      filterExpense(text.current.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="col col-12 col-md-6 form-floating mb-3">
      <input
        ref={text}
        type="text"
        className="form-control"
        id="expenseSearch"
        placeholder="Search Expense by Name/Category"
        onChange={onChange}
      />
      <label className="ps-4" htmlFor="expenseSearch">Search Expense by Name/Category</label>
    </form>
  );
}

export default ExpenseSearch;
