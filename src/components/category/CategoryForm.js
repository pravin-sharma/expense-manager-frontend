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
    <form className="row gy-2 gx-3 align-items-center" onSubmit={onSubmit}>
      <h2 className="ms-3 text-primary">
        {current ? "Update Category" : "Add Category"}
      </h2>
      <div className="row align-items-center m-1">
        <div className="col-auto">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="categoryName"
              placeholder="category name"
              name="categoryName"
              value={categoryName}
              onChange={onChange}
            />
            <label htmlFor="categoryName">
              Category Name <i className="fa-solid fa-money-check" />
            </label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="budget"
              placeholder="budget"
              name="budget"
              value={budget}
              onChange={onChange}
            />
            <label htmlFor="budget">
              Budget (<i className="fa-solid fa-indian-rupee-sign fa-xs" />)
            </label>
          </div>
        </div>

        <div className="col-auto">
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="budgetStartDate"
              placeholder="Budget Start Date"
              name="budgetStartDate"
              value={budgetStartDate}
              onChange={onChange}
            />
            <label htmlFor="budgetStartDate">Budget Start Date</label>
          </div>
        </div>

        <div className="col-auto">
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="budgetEndDate"
              placeholder="Budget End Date"
              name="budgetEndDate"
              value={budgetEndDate}
              onChange={onChange}
            />
            <label htmlFor="budgetEndDate">Budget End Date</label>
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

export default CategoryForm;
