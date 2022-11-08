import React, { Fragment, useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import ExpenseForm from "../expenses/ExpenseForm";
import Expenses from "../expenses/Expenses";
import ExpenseSearch from "../expenses/ExpenseSearch";

const Home = () => {

  const {loadUser} = useContext(AuthContext);

  useEffect(()=>{
    loadUser();
    // eslint-disable-next-line
  },[])

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
