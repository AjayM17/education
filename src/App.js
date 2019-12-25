import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/home'
import About from './pages/about/about'
import Header from './component/header/header'
import Footer from './component/footer/footer'



function App() {
  return (
    <div  className="containor">
      <Header/>
  
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
