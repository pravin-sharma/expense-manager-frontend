import React, { Fragment, useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import Categories from "../category/Categories";
import CategoryForm from "../category/CategoryForm";

const Category = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container pt-5">
      <CategoryForm />
      <Categories />
    </div>
  );
};

export default Category;
