import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discussion from './components/Discussion/Discussion';
import Home from './components/Home/Home';

function App() {
    return (
      <Router>
            <Route exact path='/' component={Home} />
            <Route exact path="/discussion/:id" component={Discussion} /> 
      </Router>
    );
  }
export default App;
