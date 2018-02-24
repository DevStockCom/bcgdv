import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import QuestionsList from './components/QuestionsList';
import QuestionCreate from './components/QuestionCreate';
import QuestionDetails from './components/QuestionDetails';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <div className="sidebar">
              <h3>MENU</h3>
              <ul className="sidebar__menu">
                <li><Link to="/questions">Questions List</Link></li>
                <li><Link to="/create">Create Question</Link></li>
              </ul>
            </div>
            <div className="content">
              <Route exact path="/" component={QuestionsList}/>
              <Route exact path="/questions" component={QuestionsList}/>
              <Route exact path="/create" component={QuestionCreate}/>
              <Route exact path="/questions/:id" component={QuestionDetails}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
