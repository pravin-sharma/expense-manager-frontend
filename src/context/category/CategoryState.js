import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  CLEAR_CATEGORIES,
  CATEGORY_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_ERRORS,
} from "../types";

import React from "react";
import { useReducer } from "react";
import categoryReducer from "./categoryReducer";
import CategoryContext from "./categoryContext";
import axios from "axios";

const CategoryState = (props) => {
  const initialState = {
    categories: [],
    current: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  //Add Category
  const addCategory = async (category) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/category/add", category, config);
      dispatch({ type: ADD_CATEGORY, payload: res.data.category });
    } catch (error) {
      dispatch({ type: CATEGORY_ERROR, payload: error.response.data.message });
    }
  };

  //Get All Category
  const getCategories = async () => {
    try {
      const res = await axios.get("/category/getAll");
      dispatch({ type: GET_CATEGORIES, payload: res.data.categories });
    } catch (error) {
      dispatch({ type: CATEGORY_ERROR, payload: error.response.data.message });
    }
  };

  //Clear All Categories
  const clearCategories = () => {
    dispatch({ type: CLEAR_CATEGORIES });
  };

  //delete Category
  const deleteCategory = async (categoryId) => {
    try {
      // eslint-disable-next-line
      const res = await axios.delete(`/category/delete/${categoryId}`);
      dispatch({ type: DELETE_CATEGORY, payload: categoryId });
    } catch (error) {
      dispatch({ type: CATEGORY_ERROR, payload: error.response.data.message });
    }
  };

  //set current category
  const setCurrent = (category) => {
    dispatch({ type: SET_CURRENT, payload: category });
  };

  //clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update category
  const updateCategory = async (category) => {
    try {
      const res = await axios.put(`/category/update/${category._id}`, category);
      dispatch({ type: UPDATE_CATEGORY, payload: res.data.category });
    } catch (error) {
      dispatch({ type: CATEGORY_ERROR, payload: error.response.data.message });
    }
  };

  //clear errors
  const clearError = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        current: state.current,
        error: state.error,
        loading: state.loading,
        addCategory,
        deleteCategory,
        updateCategory,
        getCategories,
        clearCategories,
        setCurrent,
        clearCurrent,
        clearError,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
