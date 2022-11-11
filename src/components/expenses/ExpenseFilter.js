import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ExpenseContext from "../../context/expense/expenseContext";
import CategoryContext from "../../context/category/categoryContext";

const ExpenseFilter = () => {
  const { getExpenses } = useContext(ExpenseContext);
  const { categories, getCategories } = useContext(CategoryContext);

  const [filter, setFilter] = useState({
    period: "",
    categoryId: "",
  });

  const onClick = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getExpenses(filter);
    // eslint-disable-next-line
  }, [filter]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex-fill ms-3">
      {/* Category */}
      <div className="">
        <button
          className="badge rounded-pill m-1 border-0"
          style={{ backgroundColor: "#FEBE8C" }}
          value={""}
          name="categoryId"
          onClick={onClick}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            className="badge rounded-pill m-1 border-0"
            style={{ backgroundColor: "#FEBE8C" }}
            value={category._id}
            name="categoryId"
            onClick={onClick}
            key={category._id}
          >
            {category.categoryName}
          </button>
        ))}
      </div>

      {/* Period */}
      <div className="">
        <button
          className="badge rounded-pill m-1 border-0"
          style={{ backgroundColor: "#B6E2A1" }}
          value={""}
          name="period"
          onClick={onClick}
        >
          All
        </button>
        <button
          className="badge rounded-pill m-1 border-0"
          style={{ backgroundColor: "#B6E2A1" }}
          value={7}
          name="period"
          onClick={onClick}
        >
          Last 7 days
        </button>
        <button
          className="badge rounded-pill m-1 border-0"
          style={{ backgroundColor: "#B6E2A1" }}
          value={30}
          name="period"
          onClick={onClick}
        >
          Last 30 days
        </button>
      </div>
    </div>
  );
};

export default ExpenseFilter;
