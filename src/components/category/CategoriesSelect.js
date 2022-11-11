import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoriesSelect = ({expense, setExpense}) => {
  const [options, setOptions] = useState([]);

  const fecthData = async () => {
    try {
      const res = await axios.get("/category/getAll");
      const results = [];

      res.data.categories.forEach((d) =>
        results.push({ value: d._id, key: d.categoryName })
      );

      setOptions([{ key: "Choose a category", value: "" }, ...results]);
    } catch (error) {}
  };

  useEffect(() => {
    fecthData();
  }, []);

  const onChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-auto mb-3">
      <div className="form-floating">
        <select
          className="form-select"
          id="categoryId"
          aria-label="Select Expense Category"
          name="categoryId"
          value={expense.categoryId}
          onChange={onChange}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </select>
        <label htmlFor="categoryId">Category</label>
      </div>
    </div>
  );
};

export default CategoriesSelect;
