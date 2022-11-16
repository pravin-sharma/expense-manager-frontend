import React, { useEffect } from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import CategoryContext from "../../context/category/categoryContext";
import Categories from "../category/Categories";
import CategoryForm from "../category/CategoryForm";

const Category = () => {
  const { loadUser } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);
  const { error, clearError } = useContext(CategoryContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearError();
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <div className="container pt-5">
      <CategoryForm />
      <Categories />
    </div>
  );
};

export default Category;
