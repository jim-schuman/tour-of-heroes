import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import About from "./About";
import Heroes from "./heroes/Heroes";
import Villians from "./villians/Villians";
import ErrorPage from "./ErrorPage";
import './styles.scss';
import 'bulma/css/bulma.css';

function App() {
  return (
    <Router>
      <HeaderBar />
      <div className="container">

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/heroes">Heroes</Link></li>
          <li><Link to="/villians">Villians</Link></li>
        </ul>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/heroes" component={Heroes} />
          <Route path="/villians" component={Villians} />
          <Route exact path="**" component={ErrorPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
