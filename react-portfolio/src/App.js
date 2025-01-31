import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import Resume from './Pages/Resume';
// import MyProjects from './Pages/MyProjects';
// import ContactMe from './Pages/ContactMe';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes> */}
        {/* <Route path="/" Component={Home} /> */}
        {/* <Route path="/resume" Component={Resume} /> */}
        {/* <Route path="/projects" Component={MyProjects} /> */}
        {/* <Route path="/contact" Component={ContactMe} /> */}
      {/* </Routes> */}
      <Footer />
    </>
  );
}

export default App;
