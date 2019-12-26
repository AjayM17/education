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
import DirectorMessage from './pages/director_message/director_message'
import Gallery from './pages/gallery/gallery'
import Placement from './pages/placement/placement'
import Facilities from './pages/facilities/facilities'
import Contact from './pages/contact/contact'
import Admission from './pages/admission/admission'
import Student from './pages/student/student'

const App = () => {
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
    case '/message':
      activePath = 'message'
      break;
    case '/gallery':
      activePath = 'gallery'
      break;
    case '/placement':
      activePath = 'placement'
      break;
    case '/facilities':
      activePath = 'facilities'
      break;
    case '/contact':
      activePath = 'contact'
      break;
    case '/admission':
      activePath = 'admission'
      break;
    case '/student':
      activePath = 'student'
      break;
    default:
      activePath = 'home'
  }
  return (
    <div className="mx-lg-5 mx-3">
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
        <Route path="/message">
          <DirectorMessage />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/placement">
          <Placement />
        </Route>
        <Route path="/facilities">
          <Facilities />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path='/admission'>
          <Admission />
        </Route>
        <Route path='/student'>
          <Student />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
