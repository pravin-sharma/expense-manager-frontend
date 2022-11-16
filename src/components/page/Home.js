import React, { useContext } from "react";
import { useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import ExpenseContext from "../../context/expense/expenseContext";
import ExpenseFilter from "../expenses/ExpenseFilter";
import ExpenseForm from "../expenses/ExpenseForm";
import Expenses from "../expenses/Expenses";
import ExpenseSearch from "../expenses/ExpenseSearch";

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  const { setAlert } = useContext(AlertContext);
  const { error, clearError } = useContext(ExpenseContext);

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
      <ExpenseForm />
      <h2 className="mt-3 text-black">Expenses</h2>
      <div className="row row-cols-1 row-cols-md-2 justify-content-between">
        <ExpenseSearch />
        <ExpenseFilter />
      </div>
      <Expenses />
    </div>
  );
};

export default Home;
