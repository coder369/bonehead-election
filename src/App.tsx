import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { CreateElection } from './components/election/CreateElection';
import { Home } from './components/Home';
import { VoteContainer } from './containers/VoteContainer'
import {VoterTableContainer} from "./components/register/VoterTableContainer";
import {VoterFormContainer} from "./components/register/VoterFormContainer";

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bonehead Election</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register Voter</Link>
          </li>
          <li>
            <Link to="/list_voters">All Registered Voters</Link>
          </li>
          <li>
            <Link to="/vote">Capture Votes</Link>
          </li>
          <li>
            <Link to="/election">Create Election</Link>
          </li>
        </ul>
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" component={VoterFormContainer}/>
            <Route path="/list_voters" component={VoterTableContainer}/>
            <Route path="/vote" component={VoteContainer}/>
            <Route path="/election" component={CreateElection}/>
          </Switch>
        </main>
        <footer>
          <small>A Bonehead Election, Inc.</small>
        </footer>
      </nav>
    </div>
  );
}

export default App;