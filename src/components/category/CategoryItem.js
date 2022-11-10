import React, { useContext } from "react";
import PropTypes from 'prop-types'
import CategoryContext from "../../context/category/categoryContext";


const CategoryItem = ({ category }) => {

  const categoryContext = useContext(CategoryContext)
  const {deleteCategory, setCurrent, clearCurrent} = categoryContext;

  const {
    _id,
    budget,
    budgetEndDate,
    budgetStartDate,
    categoryName,
    expenseTotal,
    isDefault,
  } = category;

  const onDelete = () => {
    deleteCategory(_id);
    clearCurrent();
  };

  const onEditButtonClick = () => {
    setCurrent(category);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="me-2">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </div>

      <div className="me-2">{budget}</div>
      <div className="me-2">{budgetStartDate}</div>
      <div className="me-2">{budgetEndDate}</div>

      <div className="me-2">{expenseTotal}</div>

      <button onClick={onEditButtonClick} className="btn btn-primary me-2">
        <i className="fa-solid fa-pen-to-square" />
      </button>
      <button onClick={onDelete} className="btn btn-danger">
        <i className="fa-solid fa-trash" />
      </button>
    </li>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired
}

export default CategoryItem;
