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
  CLEAR_FILTER,
} from "../types";

const ExpenseState = (props) => {
  const initialState = {
    expenses: [
      {
        _id: "63616daaf07ba48aa7cc789f",
        categoryId: "6360dccc62599fdf3dbb0f02",
        item: "gym fees",
        cost: 7000,
        expenseDate: "2022-11-01",
      },
      {
        _id: "63617d86027be4d8e08ebd05",
        categoryId: "6361799befc1c0478298a918",
        item: "meds",
        cost: 27000,
        expenseDate: "2022-11-01",
      },
      {
        _id: "636189009c14eaf33ae1b869",
        categoryId: "6360dccc62599fdf3dbb0f02",
        item: "supplements",
        cost: 1000,
        expenseDate: "2022-11-01",
      },
      {
        _id: "63623072e8503b06cdfc3702",
        categoryId: "635fd664e11d92e7da1f3ef5",
        item: "SIP",
        cost: 10000,
        expenseDate: "2022-11-01",
      },
    ],
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
