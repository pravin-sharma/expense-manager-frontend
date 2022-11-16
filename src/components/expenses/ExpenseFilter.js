import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ExpenseContext from "../../context/expense/expenseContext";
import CategoryContext from "../../context/category/categoryContext";

const ExpenseFilter = () => {
  const { getExpenses } = useContext(ExpenseContext);
  const { categories, getCategories } = useContext(CategoryContext);

  // Filter State
  const [filter, setFilter] = useState({
    period: "",
    categoryId: "",
  });

  // Button active state
  const [activePeriod, setActivePeriod] = useState("allDays");

  // Button active state
  const [activeCategory, setActiveCategory] = useState("allCategories");

  const onClick = (e) => {
    console.log(e);
    setFilter({ ...filter, [e.target.name]: e.target.value });

    //button active state
    if (e.target.name === "period") {
      setActivePeriod(e.target.id);
    }
    if (e.target.name === "categoryId") {
      setActiveCategory(e.target.id);
    }
  };

  useEffect(() => {
    getExpenses(filter);
    // eslint-disable-next-line
  }, [filter]);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="col col-12 col-md-6 mb-3">
      {/* Category */}
      <div className="">
        <button
          className="badge rounded-pill m-1 border-0"
          style={activeCategory === 'allCategories'?{ backgroundColor: "#e5751e" }:{ backgroundColor: "#FEBE8C" }}
          value={""}
          name="categoryId"
          id="allCategories"
          onClick={onClick}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            className="badge rounded-pill m-1 border-0"
            style={activeCategory === category._id?{ backgroundColor: "#e5751e" }:{ backgroundColor: "#FEBE8C" }}
            value={category._id}
            name="categoryId"
            onClick={onClick}
            key={category._id}
            id={category._id}
          >
            {category.categoryName}
          </button>
        ))}
      </div>

      {/* Period */}
      <div className="">
        <button
          className="badge rounded-pill m-1 border-0"
          style={activePeriod === 'allDays'?{ backgroundColor: "#49ab1b" }:{ backgroundColor: "#B6E2A1" }}
          value={""}
          name="period"
          id="allDays"
          onClick={onClick}
        >
          All
        </button>
        <button
          className="badge rounded-pill m-1 border-0"
          style={activePeriod === 'sevenDays'?{ backgroundColor: "#49ab1b" }:{ backgroundColor: "#B6E2A1" }}
          value={7}
          id="sevenDays"
          name="period"
          onClick={onClick}
        >
          Last 7 days
        </button>
        <button
          className="badge rounded-pill m-1 border-0"
          style={activePeriod === 'thirtyDays'?{ backgroundColor: "#49ab1b" }:{ backgroundColor: "#B6E2A1" }}
          value={30}
          name="period"
          id="thirtyDays"
          onClick={onClick}
        >
          Last 30 days
        </button>
      </div>
    </div>
  );
};

export default ExpenseFilter;
