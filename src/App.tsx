import React from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/layout-styles.scss";
import Employess from "./components/Employess";
import Error from "./components/Error";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="content-page">
        <Sidebar />
        <div className="main-content">
          <Router>
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/employess" component={Employess} />
                <Route path="/counters" component={Counter} />
                <Route path="*" render={() => <Error />} />
            </Switch>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
