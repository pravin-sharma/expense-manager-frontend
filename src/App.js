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

function App() {
  setTokenInHeader();
  return (
    <AuthState>
      <ExpenseState>
        <div className="App">
          <NavigationBar />
          <Router>
            <Routes>
              <Route exact path="/" element={<Auth />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </div>
      </ExpenseState>
    </AuthState>
  );
}

export default App;
