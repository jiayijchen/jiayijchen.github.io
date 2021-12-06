import './App.css';
import React from 'react';
import AboutMe from './components/AboutMe.js';
import Landing from './components/Landing.js';
import NavBar from './components/NavBar.js';
import Blog from './components/Blog.js';
import WIP from './components/WIP.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [blogData, setBlogData] = useState([]);

  async function getBlog() {
    try {
      const response = await axios.get('blogposts.json');
      setBlogData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBlog();
    console.log(blogData);
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
              <WIP />
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