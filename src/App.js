import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home'
import Header from './component/header/header'



function App() {
  return (
    <div  className="containor">
      <Header/>
  
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
