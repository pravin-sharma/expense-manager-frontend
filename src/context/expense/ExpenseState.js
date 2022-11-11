import React, { useReducer } from "react";
import ExpenseContext from "./expenseContext";
import expenseReducer from "./expenseReducer";
import AlertContext from '../alert/alertContext';

import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EXPENSE,
  FILTER_EXPENSES,
  CLEAR_FILTER,
  EXPENSE_ERROR,
  GET_EXPENSES,
  CLEAR_EXPENSES,
} from "../types";
import axios from "axios";
import { useContext } from "react";

const ExpenseState = (props) => {
  const initialState = {
    expenses: [],
    current: null,
    filtered: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const {setAlert} = useContext(AlertContext);

  //Add expense
  const addExpense = async (expense) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/expense/add", expense, config);
      if(res.data.isOverBudget){
        setAlert(`Category: ${res.data.expense.categoryName} is Over Budget`, 'danger')
      }
      dispatch({ type: ADD_EXPENSE, payload: res.data.expense });
    } catch (error) {
      dispatch({ type: EXPENSE_ERROR, payload: error.response.data.message });
    }
  };

  //Get All Expenses
  const getExpenses = async (filter) => {
    try {
      const res = await axios.get(`/expense?categoryId=${filter?.categoryId}&period=${filter?.period}`);
      dispatch({ type: GET_EXPENSES, payload: res.data.expenses });
    } catch (error) {
      dispatch({ type: EXPENSE_ERROR, payload: error.response.data.message });
    }
  };

  //Clear All Expenses
  const clearExpenses = () => {
    dispatch({ type: CLEAR_EXPENSES });
  };

  //delete expense
  const deleteExpense = async (expenseId) => {
    try {
      // eslint-disable-next-line
      const res = await axios.delete(`/expense/delete/${expenseId}`);
      dispatch({ type: DELETE_EXPENSE, payload: expenseId });
    } catch (error) {
      dispatch({ type: EXPENSE_ERROR, payload: error.response.data.message });
    }
  };
  //set current expense
  const setCurrent = (expense) => {
    dispatch({ type: SET_CURRENT, payload: expense });
  };
  //clear current expense
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update expense
  const updateExpense = async (expense) => {
    try {
      const res = await axios.put(`/expense/update/${expense._id}`, expense);
      dispatch({ type: UPDATE_EXPENSE, payload: res.data.expense });
    } catch (error) {
      dispatch({ type: EXPENSE_ERROR, payload: error.response.data.message });
    }
  };
  //filter expenses

  const filterExpense = (text) => {
    dispatch({ type: FILTER_EXPENSES, payload: text });
  };
  //clear filter expenses
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        addExpense,
        getExpenses,
        clearExpenses,
        deleteExpense,
        setCurrent,
        clearCurrent,
        updateExpense,
        filterExpense,
        clearFilter,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
