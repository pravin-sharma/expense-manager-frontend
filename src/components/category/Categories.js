import React, { Fragment, useEffect } from "react";
import { useContext } from "react";
import CategoryContext from "../../context/category/categoryContext";
import CategoryItem from "./CategoryItem";
import AuthContext from "../../context/auth/authContext";

const Categories = () => {
  const { categories, loading, getCategories } = useContext(CategoryContext);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      getCategories();
    }
  }, [isAuthenticated]);

  if (categories.length === 0 && !loading) {
    return <h5 className="text-muted ms-3">No Expenses to show</h5>;
  }
  
  return (
    <ul className="list-group ms-3">
      <h2 className="mt-3 mx-3 text-primary">All Categories:</h2>
      {categories.map((category) => (
        <CategoryItem category={category} key={category._id} />
      ))}
    </ul>
  );
};

export default Categories;
