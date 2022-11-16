import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../../context/expense/expenseContext";
import CategoriesSelect from "../category/CategoriesSelect";

const ExpenseForm = () => {
  const expenseContext = useContext(ExpenseContext);
  const { addExpense, current, clearCurrent, updateExpense } = expenseContext;

  const [expense, setExpense] = useState({
    item: "",
    cost: "",
    categoryId: "",
    expenseDate: "",
  });

  const { item, cost, categoryId, categoryName, expenseDate } = expense;

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
    <div
      className="row gy-2 gx-3 align-items-center border rounded bg-dark p-4"
      onSubmit={onSubmit}
    >
      <h2 className="text-light mb-3">
        {current ? "Update Expense" : "Add Expense"}
      </h2>
      <form className="row align-items-center">
        <div className="col-auto mb-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="expense name"
              name="item"
              value={item}
              onChange={onChange}
              required
              minLength={2}
            />
            <label htmlFor="name">
              Expense Name <i className="fa-solid fa-money-check" />
            </label>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="cost"
              placeholder="cost"
              name="cost"
              value={cost}
              onChange={onChange}
              required
              min={1}
              max={9999999}
            />
            <label htmlFor="cost">
              Cost (<i className="fa-solid fa-indian-rupee-sign fa-xs" />)
            </label>
          </div>
        </div>

        <CategoriesSelect expense={expense} setExpense={setExpense} />

        <div className="col-auto mb-3">
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="expenseDate"
              placeholder="date"
              name="expenseDate"
              value={expenseDate}
              onChange={onChange}
              required
            />
            <label htmlFor="date">Date</label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary btn-lg my-btn-primary">
            {current ? "Update" : "Add"}
          </button>
        </div>
        {current && (
          <div className="col-auto">
            <button className="btn btn-danger btn-lg" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExpenseForm;
