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
    <Fragment>
      <h2 className="mt-3 text-black">All Categories</h2>

      <table className="table align-middle mb-4 bg-white border rounded">
        <thead className="bg-light align-middle">
          <tr>
            <th>Category Name</th>
            <th>Budget</th>
            <th>Budget Start Date</th>
            <th>Budget End Date</th>
            <th>Expense Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryItem category={category} key={category._id} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Categories;
