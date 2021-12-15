import './styles/App.css';
import React from 'react';
import AboutMe from './components/AboutMe.js';
import Landing from './components/Landing.js';
import NavBar from './components/NavBar.js';
import Blog from './components/Blog.js';
import Portfolio from './components/Portfolio.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [blogData, setBlogData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  async function getBlog() {
    try {
      const response = await axios.get('./blogposts.json');
      setBlogData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProjects() {
    try {
      const response = await axios.get('./projects.json');
      setProjectsData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBlog();
    getProjects();
  },[]);

  return (
    <div className="App" >
      <header className="bg-light">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/blog">
              <Blog blogData={blogData} />
            </Route>
            <Route path="/portfolio">
              <Portfolio projectsData={projectsData} />
            </Route>
            <Route path="/" >
              <Landing />
            </Route>
          </Switch>
        </Router>
      </header>
    </div >
  );
}

export default App;