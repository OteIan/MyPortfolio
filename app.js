import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import NotFound from './Pages/Home/Errors/NotFound';
import { motion } from 'framer-motion';
import Blue from './iconComponents/blue';


function App() {

  return (
    <div className="container">
      <header>
        <div className="logo">
          <Blue />
        </div>
        <h1 className="name">Maya Nelson</h1>
        <span className="title">PROJECT MANAGER</span>
      </header>
      <main>
        <section className="intro">
          <h2>Hello</h2>
          <p>Here's who I am & what I do</p>
          <div className="buttons">
            <button className="resume-btn">RESUME</button>
            <button className="projects-btn">PROJECTS</button>
          </div>
          <p className="description">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <p className="description">
            I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
        </section>
        <section className="contact">
          <p>© 2035 by Maya Nelson.</p>
          <p>Powered and secured by Wix</p>
          <div className="contact-info">
            <p>Call: 123-456-7890</p>
            <p>Write: info@mysite.com</p>
            <p>Follow: 
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#instagram">Instagram</a>
            </p>
          </div>
        </section>
      </main>
      <nav className="nav-links">
        <a href="#about">ABOUT ME</a>
        <a href="#resume">RESUME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  );
}

export default App;
