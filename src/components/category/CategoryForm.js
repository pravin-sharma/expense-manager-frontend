import React, { useContext, useEffect, useState } from "react";
import CategoryContext from "../../context/category/categoryContext";

const CategoryForm = () => {
  const categoryContext = useContext(CategoryContext);
  const { addCategory, current, clearCurrent, updateCategory } =
    categoryContext;

  const [category, setCategory] = useState({
    categoryName: "",
    budget: "",
    expenseTotal: "",
    budgetStartDate: "",
    budgetEndDate: "",
  });

  const { categoryName, budget, budgetStartDate, budgetEndDate } = category;

  useEffect(() => {
    if (current) {
      setCategory(current);
    } else {
      setCategory({
        categoryName: "",
        budget: "",
        expenseTotal: "",
        budgetStartDate: "",
        budgetEndDate: "",
      });
    }
  }, [current]);

  const clearAll = () => {
    clearCurrent();
  };

  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      addCategory(category);
    } else {
      updateCategory(category);
      clearCurrent();
    }
    setCategory({
      categoryName: "",
      budget: "",
      expenseTotal: "",
      budgetStartDate: "",
      budgetEndDate: "",
    });
  };

  return (
    <div className="row gy-2 gx-3 align-items-center border rounded bg-dark p-4" onSubmit={onSubmit}>
      <h2 className="text-light mb-3">
        {current ? "Update Category" : "Add Category"}
      </h2>
      <form className="row align-items-center">
        <div className="col-auto  mb-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="categoryName"
              placeholder="category name"
              name="categoryName"
              value={categoryName}
              onChange={onChange}
              required
              minLength={2}
            />
            <label htmlFor="categoryName">
              Category Name <i className="fa-solid fa-money-check" />
            </label>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="budget"
              placeholder="budget"
              name="budget"
              value={budget}
              onChange={onChange}
              required
              min={1}
              max={9999999}
            />
            <label htmlFor="budget">
              Budget (<i className="fa-solid fa-indian-rupee-sign fa-xs" />)
            </label>
          </div>
        </div>

        <div className="col-auto mb-3">
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="budgetStartDate"
              placeholder="Budget Start Date"
              name="budgetStartDate"
              value={budgetStartDate}
              onChange={onChange}
              required
            />
            <label htmlFor="budgetStartDate">Budget Start Date</label>
          </div>
        </div>

        <div className="col-auto mb-3">
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="budgetEndDate"
              placeholder="Budget End Date"
              name="budgetEndDate"
              value={budgetEndDate}
              onChange={onChange}
              required
            />
            <label htmlFor="budgetEndDate">Budget End Date</label>
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

export default CategoryForm;
