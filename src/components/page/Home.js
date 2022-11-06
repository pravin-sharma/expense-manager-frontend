import React, { Fragment } from "react";
import ExpenseForm from "../expenses/ExpenseForm";
import Expenses from "../expenses/Expenses";
import ExpenseSearch from "../expenses/ExpenseSearch";

const Home = () => {
  return (
    <Fragment>
      <ExpenseForm />
      <h2 className="mt-3 mx-3 text-primary">Expenses:</h2>
      <ExpenseSearch />
      <Expenses />
    </Fragment>
  );
};

export default Home;
