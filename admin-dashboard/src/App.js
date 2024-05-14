import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/500" component={ErrorPage} />
        <Redirect from="/" to="/admin/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
