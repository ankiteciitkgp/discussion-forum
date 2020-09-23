import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discussion from './components/Discussion/Discussion';
import Home from './components/Home/Home';
import { NetlifyIdentity } from "./components/NetlifyIdentity/NetlifyIdentity";

function App() {
    return (
      <Router>
            <NetlifyIdentity/>
            <Route exact path='/' component={Home} />
            <Route exact path="/discussion/:id" component={Discussion} /> 
      </Router>
    );
  }
export default App;
