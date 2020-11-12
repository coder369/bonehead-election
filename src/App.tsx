import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { RegisterVoter } from './components/RegisterVoter';
import { CreateElection } from './components/CreateElection';
import { Home } from './components/Home';
import { VoteContainer } from './containers/VoteContainer'

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
            <Link to="/register">Register New Voter</Link>
          </li>
          <li>
            <Link to="/list_voters">Register Voters</Link>
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
            <Route path="/" exact component={Home}></Route>
            <Route path="/register" component={RegisterVoter}></Route>
            <Route path="/list_voters" component={RegisterVoter}></Route>
            <Route path="/vote" component={VoteContainer}></Route>
            <Route path="/election" component={CreateElection}></Route>
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