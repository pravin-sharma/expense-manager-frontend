import React, { useReducer } from "react";
import ExpenseContext from "./expenseContext";
import expenseReducer from "./expenseReducer";
import {v4} from  'uuid';

import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EXPENSE,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ExpenseState = (props) => {
  const initialState = {
    expenses: [],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  //Add expense
  const addExpense = expense =>{
    expense._id = v4();
    dispatch({type: ADD_EXPENSE, payload: expense})
  }
  //delete expense
  const deleteExpense = expenseId => {
    dispatch({type: DELETE_EXPENSE, payload: expenseId})
  }
  //set current expense
  const setCurrent = expense =>{
    dispatch({type: SET_CURRENT, payload: expense})
  }
  //clear current expense
  const clearCurrent = () =>{
    dispatch({type: CLEAR_CURRENT})
  }

  //update expense
  const updateExpense = (expense) =>{
    dispatch({type: UPDATE_EXPENSE, payload: expense})
  }
  //filter expenses

  const filterExpense = text => {
    dispatch({type: FILTER_CONTACTS, payload: text})
  }
  //clear filter expenses
  const clearFilter = () =>{
    dispatch({type: CLEAR_FILTER})
  }

  return (
    <ExpenseContext.Provider
    value={{
        expenses: state.expenses,
        current: state.current,
        filtered: state.filtered,
        addExpense,
        deleteExpense,
        setCurrent,
        clearCurrent,
        updateExpense,
        filterExpense,
        clearFilter
    }}
    >
        {props.children}
    </ExpenseContext.Provider>
  )
};

export default ExpenseState;
