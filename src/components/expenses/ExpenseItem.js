import React, { useContext } from "react";
import ExpenseContext from "../../context/expense/expenseContext";
import PropTypes from 'prop-types'


const ExpenseItem = ({ expense }) => {
  const expenseContext = useContext(ExpenseContext)
  const {deleteExpense, setCurrent, clearCurrent, clearFilter} = expenseContext;

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
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="me-2">
        {item.charAt(0).toUpperCase() + item.slice(1)}  
      </div>

      <div className="me-2">{cost}</div>
      {/* <div className="me-2">{categoryId}</div> */}
      <div className="me-2">{categoryName}</div>

      <div className="me-2">{expenseDate}</div>

      <button onClick={onEditButtonClick} className="btn btn-primary me-2">
        <i className="fa-solid fa-pen-to-square" />
      </button>
      <button onClick={onDelete} className="btn btn-danger">
        <i className="fa-solid fa-trash" />
      </button>
    </li>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired
}

export default ExpenseItem;



