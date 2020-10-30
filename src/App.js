import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddEvent from './components/events/AddEvents';
import EditEvent from './components/events/EditEvents';
import ViewEvent from './components/events/ViewEvents';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="App">
    <Navbar/>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/events/add" component={AddEvent}/>
      <Route exact path="/events/edit/:id" component={EditEvent} />
      <Route exact path="/events/:id" component={ViewEvent} />
      <Route component={NotFound}/>
    </Switch>
  </div>
  </Router>
  );
}

export default App;
