import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/home'
import About from './pages/about/about'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Course from './pages/course/course'

function App() {
  let history = useHistory();
  let activePath = "home"
  switch (history.location.pathname) {
    case '/home':
      activePath = 'home'
      break;
    case '/about':
      activePath = 'about'
      break;
      case '/courses':
        activePath = 'courses'
        break;
  }
  return (
    <div className="containor">
      <Header activePath={activePath} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/courses">
          <Course />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
