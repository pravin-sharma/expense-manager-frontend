import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./components/page/Auth";
import NavigationBar from "./components/layout/NavigationBar";
import Home from "./components/page/Home";
import setTokenInHeader from "./utils/setTokenInHeader";
import PageNotFound from "./components/page/PageNotFound";
import ExpenseState from "./context/expense/ExpenseState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import { Alerts } from "./components/layout/Alerts";

function App() {
  setTokenInHeader();
  return (
    <AuthState>
      <ExpenseState>
        <AlertState>
          <div className="App">
            <NavigationBar />
            <Alerts />
            <Router>
              <Routes>
                <Route exact path="/" element={<Auth />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Router>
          </div>
        </AlertState>
      </ExpenseState>
    </AuthState>
  );
}

export default App;
