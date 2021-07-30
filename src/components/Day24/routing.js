import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContex } from "./Authentic";
import About from "./navbarComponents/About";
import Home from "./navbarComponents/Home";
import Profile from "./navbarComponents/Profile";
import Dashboard from "./navbarComponents/DashBoard";
import "./day24.css";

function Routing() {
  return (
    <Router>
      <nav className="navbar_day24">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/dashboard">DashBaord</Link>
      </nav>

      <Switch>
        <AuthContex>
          <main>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </main>
        </AuthContex>
      </Switch>
    </Router>
  );
}

export default Routing;
