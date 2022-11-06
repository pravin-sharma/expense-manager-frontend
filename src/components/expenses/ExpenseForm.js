import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../../context/expense/expenseContext";

const ExpenseForm = () => {
  const expenseContext = useContext(ExpenseContext);
  const { addExpense, current, clearCurrent, updateExpense } = expenseContext;

  const [expense, setExpense] = useState({
    item: "",
    cost: "",
    categoryId: "",
    expenseDate: "",
  });

  const { item, cost, categoryId, expenseDate } = expense;

  useEffect(() => {
    if (current) {
      setExpense(current);
    } else {
      setExpense({
        item: "",
        cost: "",
        categoryId: "",
        expenseDate: "",
      });
    }
    //expenseContext, current
  }, [current]);

  const clearAll = () => {
    clearCurrent();
  };

  const onChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      addExpense(expense);
    } else {
      updateExpense(expense);
      clearCurrent();
    }
    setExpense({
      item: "",
      cost: "",
      categoryId: "",
      expenseDate: "",
    });
  };

  return (
    <form className="row gy-2 gx-3 align-items-center" onSubmit={onSubmit}>
      <h2 className="ms-3 text-primary">
        {current ? "Update Expense" : "Add Expense"}
      </h2>
      <div className="row align-items-center m-1">
        <div className="col-auto">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="expense name"
              name="item"
              value={item}
              onChange={onChange}
            />
            <label htmlFor="name">
              Expense Name <i className="fa-solid fa-money-check" />
            </label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="cost"
              placeholder="cost"
              name="cost"
              value={cost}
              onChange={onChange}
            />
            <label htmlFor="cost">
              Cost (<i className="fa-solid fa-indian-rupee-sign fa-xs" />)
            </label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-floating">
            <select
              className="form-select"
              id="categoryId"
              aria-label="Select Expense Category"
              name="categoryId"
              value={categoryId}
              onChange={onChange}
            >
              <option>Choose the category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="categoryId">Category</label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="expenseDate"
              placeholder="date"
              name="expenseDate"
              value={expenseDate}
              onChange={onChange}
            />
            <label htmlFor="date">Date</label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary btn-block">
            {current ? "Update" : "Add"}
          </button>
        </div>
        {current && (
          <div className="col-auto">
            <button className="btn btn-danger btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
