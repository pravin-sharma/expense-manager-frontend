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
  CLEAR_ERRORS,
} from "../types";

const expenseReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        loading: false,
      };
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
        loading: false,
      };
    case CLEAR_EXPENSES:
      return {
        expenses: [],
        current: null,
        filtered: null,
        error: null,
        loading: false,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense._id !== action.payload
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense._id === action.payload._id ? action.payload : expense
        ),
      };
    case FILTER_EXPENSES:
      return {
        ...state,
        filtered: state.expenses.filter((expense) => {
          const re = new RegExp(`${action.payload}`, "gi");
          return expense.item.match(re) || expense.categoryName.match(re);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case EXPENSE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default expenseReducer;
