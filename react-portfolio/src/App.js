import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Home from './Pages/Home/Homescreen';
import NotFound from './Pages/Home/Errors/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
