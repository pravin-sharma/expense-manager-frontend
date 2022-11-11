import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import CategoryContext from "../../context/category/categoryContext";

const CategoryItem = ({ category }) => {
  const categoryContext = useContext(CategoryContext);
  const { deleteCategory, setCurrent, clearCurrent } = categoryContext;

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
    <Fragment>
      <tr style={budget < expenseTotal?{backgroundColor: '#e74c3c14'}:{}}>
        <td>
          <div className="d-flex align-items-center">
            <img
              src="https://www.clipartmax.com/png/middle/83-838442_budget-icons-compensation-icon-png.png"
              alt=""
              style={{ width: "45px", height: "30px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">
                {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
              </p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{budget}</p>
        </td>
        <td>{budgetStartDate}</td>
        <td>{budgetEndDate}</td>
        <td>{expenseTotal}</td>
        <td>
          <button
            type="button"
            onClick={onEditButtonClick}
            className="btn btn-link btn-sm btn-rounded"
          >
            <i className="fa-solid fa-pen-to-square fa-lg" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-link btn-sm btn-rounded text-danger"
          >
            <i className="fa-solid fa-trash fa-lg" />
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryItem;
