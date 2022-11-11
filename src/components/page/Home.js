import React, { Fragment, useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import ExpenseFilter from "../expenses/ExpenseFilter";
import ExpenseForm from "../expenses/ExpenseForm";
import Expenses from "../expenses/Expenses";
import ExpenseSearch from "../expenses/ExpenseSearch";

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container pt-5">
      <ExpenseForm />
      <h2 className="mt-3 text-black">Expenses</h2>
      <div className="d-flex justify-content-between">
        <ExpenseSearch />
        <ExpenseFilter />
      </div>
      <Expenses />
    </div>
  );
};

export default Home;
