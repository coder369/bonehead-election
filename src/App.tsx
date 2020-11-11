import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { RegisterVoters } from './components/RegisterVoters';
import { CaptureVotes } from './components/CaptureVotes';
import { CreateElection } from './components/CreateElection';
import { Home } from './components/Home';

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
            <Link to="/register">Register Voters</Link>
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
            <Route path="/register" exact component={RegisterVoters}></Route>
            <Route path="/vote" exact component={CaptureVotes}></Route>
            <Route path="/election" exact component={CreateElection}></Route>
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