import React, { Fragment, useContext } from "react";
import ExpenseContext from "../../context/expense/expenseContext";
import PropTypes from "prop-types";

const ExpenseItem = ({ expense }) => {
  const expenseContext = useContext(ExpenseContext);
  const { deleteExpense, setCurrent, clearCurrent, clearFilter } =
    expenseContext;

  const { _id, item, categoryId, categoryName, cost, expenseDate } = expense;

  const onDelete = () => {
    deleteExpense(_id);
    clearCurrent();
    clearFilter();
  };

  const onEditButtonClick = () => {
    setCurrent(expense);
  };
  return (
    <Fragment>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5501/5501375.png"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
              <p className="text-muted mb-0">
                <i className="fa-solid fa-indian-rupee-sign fa-xs" />
                {cost}
              </p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{categoryName}</p>
          {/* <p className="text-muted mb-0">IT department</p> */}
        </td>
        <td>{expenseDate}</td>
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

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default ExpenseItem;
