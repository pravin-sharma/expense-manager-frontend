import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavigationBar from "./components/layout/NavigationBar";
import Home from "./components/page/Home";
import setTokenInHeader from "./utils/setTokenInHeader";
import PageNotFound from "./components/page/PageNotFound";
import ExpenseState from "./context/expense/ExpenseState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import { Alerts } from "./components/layout/Alerts";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/PrivateRoute";
import axios from "axios";
import Category from "./components/page/Category";
import CategoryState from "./context/category/CategoryState";

function App() {
  axios.defaults.baseURL = "http://localhost:4000/api/v1";
  if (localStorage.getItem("token")) {
    setTokenInHeader(localStorage.getItem("token"));
  }

  return (
    <AuthState>
      <ExpenseState>
        <CategoryState>
          <AlertState>
            <div className="App">
              <Router>
                <NavigationBar />
                <Alerts />
                <Routes>
                  {/* <Route exact path="/home" element={<Home />} /> */}
                  <Route
                    exact
                    path="/home"
                    element={<PrivateRoute Component={Home} />}
                  />
                  <Route
                    exact
                    path="/category"
                    element={<PrivateRoute Component={Category} />}
                  />

                  <Route exact path="/" element={<Navigate to="/login" />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Router>
            </div>
          </AlertState>
        </CategoryState>
      </ExpenseState>
    </AuthState>
  );
}

export default App;
